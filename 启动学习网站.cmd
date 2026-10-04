@echo off
setlocal
chcp 65001 >nul
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0启动学习网站.ps1"
if errorlevel 1 (
  echo.
  echo SCAI 本地学习网站启动失败，请查看上方错误信息。
  pause
)
exit /b
