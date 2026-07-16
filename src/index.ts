#!/usr/bin/env node

import { Command } from "commander";
import { readFile, readFileSync } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// This is a fal;back version in case somethings fails
let version = "1.0.0";

const program = new Command();

program
  .name("Nestjs Helper")
  .description("A Nestjs Cli helper that help you install Nestjs modules")
  .version(version);

program.parse();
