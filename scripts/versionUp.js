#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const bumpType = process.argv[2]; // major | minor | patch

if (!["major", "minor", "patch"].includes(bumpType)) {
  console.error("❌ Usage: npm run versionUp [major|minor|patch]");
  process.exit(1);
}

function readJSON(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
}

function bumpVersion(version) {
  const parts = version.split(".").map(Number);

  if (bumpType === "major") {
    parts[0]++;
    parts[1] = 0;
    parts[2] = 0;
  } else if (bumpType === "minor") {
    parts[1]++;
    parts[2] = 0;
  } else if (bumpType === "patch") {
    parts[2]++;
  }

  return parts.join(".");
}

// Paths
const rootPkgPath = path.join(process.cwd(), "package.json");
const frontendPkgPath = path.join(process.cwd(), "frontend", "package.json");

// Read package.json files
const rootPkg = readJSON(rootPkgPath);
const frontendPkg = readJSON(frontendPkgPath);

// Calculate new version
const newVersion = bumpVersion(rootPkg.version);

console.log(`\n🔼 Bumping version to: ${newVersion}\n`);

// Update root version
rootPkg.version = newVersion;
writeJSON(rootPkgPath, rootPkg);

// Update frontend version (always sync with root)
frontendPkg.version = newVersion;
writeJSON(frontendPkgPath, frontendPkg);

// Run npm install + shrinkwrap in both worlds
function run(cmd, cwd) {
  console.log(`➡️  Running "${cmd}" in ${cwd}`);
  execSync(cmd, { cwd, stdio: "inherit" });
}

run("npm install", process.cwd());
run("npm shrinkwrap", process.cwd());

run("npm install", path.join(process.cwd(), "frontend"));
run("npm shrinkwrap", path.join(process.cwd(), "frontend"));

console.log(`\n✅ Version updated to ${newVersion} in both package.json files.`);
console.log("✅ npm install + npm shrinkwrap completed.\n");
