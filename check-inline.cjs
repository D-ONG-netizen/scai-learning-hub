const fs = require("fs");
const vm = require("vm");
const file = process.argv[2];
const html = fs.readFileSync(file, "utf8");
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
scripts.forEach((match, index) => {
  if (!match[1].trim()) return;
  try {
    new vm.Script(match[1], { filename: file + "#inline-" + index });
    console.log("inline script " + index + " ok");
  } catch (error) {
    console.error("inline script " + index + " failed:", error.message);
    console.error(error.stack);
    const lines = match[1].split("\n");
    const lineNumber = Number((error.stack.match(/:(\d+)\n/) || [])[1] || 0);
    for (let i = Math.max(0, lineNumber - 3); i < Math.min(lines.length, lineNumber + 2); i++) {
      console.log(String(i + 1).padStart(4), lines[i]);
    }
    process.exitCode = 1;
  }
});
