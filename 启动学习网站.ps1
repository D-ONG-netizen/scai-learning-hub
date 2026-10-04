param([switch]$NoBrowser)

$ErrorActionPreference = "SilentlyContinue"
$hub = $PSScriptRoot
$startPort = 8765
$endPort = 8795

function Test-ScaiHub {
  param([int]$Port)

  try {
    $response = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/index.html" -UseBasicParsing -TimeoutSec 1
    return $response.StatusCode -eq 200 -and $response.Content -match "<title>SCAI ME1 Study Hub</title>"
  } catch {
    return $false
  }
}

function Open-ScaiHub {
  param([int]$Port)

  if (-not $NoBrowser) {
    Start-Process "http://127.0.0.1:$Port/index.html"
  }
  Write-Host "SCAI local website: http://127.0.0.1:$Port/index.html"
}

$occupiedPorts = @(
  Get-NetTCPConnection -State Listen |
    Where-Object { $_.LocalPort -ge $startPort -and $_.LocalPort -le $endPort } |
    Select-Object -ExpandProperty LocalPort -Unique |
    Sort-Object
)

foreach ($candidatePort in $occupiedPorts) {
  if (Test-ScaiHub -Port $candidatePort) {
    Open-ScaiHub -Port $candidatePort
    exit 0
  }
}

$pythonExe = $null
$pythonPrefix = @()

$pythonCommand = Get-Command python -ErrorAction SilentlyContinue
if ($pythonCommand) {
  $detectedLines = & $pythonCommand.Source -c "import sys; print(sys.executable)" 2>$null
  if ($LASTEXITCODE -eq 0 -and $detectedLines) {
    $pythonExe = ($detectedLines | Select-Object -First 1).ToString().Trim()
  }
}

if (-not $pythonExe) {
  $pyCommand = Get-Command py -ErrorAction SilentlyContinue
  if ($pyCommand) {
    $detectedLines = & $pyCommand.Source -3 -c "import sys; print(sys.executable)" 2>$null
    if ($LASTEXITCODE -eq 0 -and $detectedLines) {
      $pythonExe = ($detectedLines | Select-Object -First 1).ToString().Trim()
      $pythonPrefix = @("-3")
    }
  }
}

if (-not $pythonExe -or -not (Test-Path -LiteralPath $pythonExe)) {
  Write-Host "Python was not found. Use the desktop offline shortcut instead." -ForegroundColor Red
  exit 1
}

$port = $startPort..$endPort | Where-Object { $_ -notin $occupiedPorts } | Select-Object -First 1
if (-not $port) {
  Write-Host "No free local port was found between $startPort and $endPort." -ForegroundColor Red
  exit 1
}

$serverArgs = @($pythonPrefix) + @(
  "-m",
  "http.server",
  "$port",
  "--bind",
  "127.0.0.1",
  "--directory",
  $hub
)

$logDirectory = Join-Path $env:LOCALAPPDATA "SCAI"
New-Item -ItemType Directory -Path $logDirectory -Force | Out-Null
$stdoutLog = Join-Path $logDirectory "local-server.out.log"
$stderrLog = Join-Path $logDirectory "local-server.err.log"

$startParameters = @{
  FilePath = $pythonExe
  ArgumentList = $serverArgs
  WorkingDirectory = $hub
  WindowStyle = "Hidden"
  RedirectStandardOutput = $stdoutLog
  RedirectStandardError = $stderrLog
  PassThru = $true
}

$server = Start-Process @startParameters
$ready = $false

for ($attempt = 0; $attempt -lt 40; $attempt++) {
  Start-Sleep -Milliseconds 250
  if (Test-ScaiHub -Port $port) {
    $ready = $true
    break
  }
  if ($server.HasExited) {
    break
  }
}

if (-not $ready) {
  if (-not $server.HasExited) {
    Stop-Process -Id $server.Id -Force
  }
  Write-Host "The local website failed to start. See $stderrLog" -ForegroundColor Red
  exit 1
}

Open-ScaiHub -Port $port
exit 0
