#!/usr/bin/env node

import chalk from "chalk";
import { Command } from "commander";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import list from "./commands/list.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// This is a fallback version in case somethings fails
let version = "1.0.0";

try {
  const packageJsonPath = join(__dirname, "..", "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
  version = packageJson.version;
} catch (error) {
  console.log(
    chalk.yellow(
      "Warning: Failed to get version  from package.json, using default 1.0.0 version",
    ),
  );
}

const program = new Command();

program
  .name("Nestjs Helper")
  .description("A Nestjs Cli helper that help you install Nestjs modules")
  .version(version);

program
  .command("list")
  .description("List all Nestjs Module you can install")
  .action(list);

program.parse();
