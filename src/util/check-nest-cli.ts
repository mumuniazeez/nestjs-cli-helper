// Check if @nestjs/cli is installed

import inquirer from "inquirer";
import isGlobalPackageInstalled from "./package-resolver.js";
import resolvePm from "./resolve-pm.js";
import { execSync } from "child_process";
import ora from "ora";
import path from "path";
import { existsSync, readFileSync } from "fs";
import { readFile } from "fs/promises";

export function isNestjsCliInstalled() {
  return isGlobalPackageInstalled("@nestjs/cli");
}

export function isNestjsProjectInDirectory(dir: string = process.cwd()) {
  // first check: nest cli config file
  const nestCliConfigPath = path.join(dir, "nest-cli.json");
  if (existsSync(nestCliConfigPath)) return true;

  // fallback check: package.json
  const packageJsonPath = path.join(dir, "package.json");
  if (!existsSync(packageJsonPath)) return false;

  try {
    const pkg = JSON.parse(readFileSync(packageJsonPath, "utf8"));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    return Boolean(deps["@nestjs/core"]);
  } catch (error) {
    return false;
  }
}

export async function promptInstallation(): Promise<boolean> {
  const nestInstalled = isNestjsCliInstalled();

  if (!nestInstalled) {
    console.log("Nestjs CLI is not installed on your machine");

    const { installCli } = await inquirer.prompt([
      {
        name: "installCli",
        type: "confirm",
        message: "Do you want to install it?",
      },
    ]);

    if (!installCli) {
      console.log("Nestjs CLI has to be installed to continue");
      return false;
    }

    try {
      console.log("Installing Nestjs CLI...");
      execSync(`npm install -g @nestjs/cli`, { stdio: "inherit" });
      console.log("Nestjs CLI installed");
    } catch (error) {
      console.log("Nestjs CLI failed to install");
      console.log(error);
      return false;
    }
  }

  const nestjsProjectInstalled = isNestjsProjectInDirectory();

  if (!nestjsProjectInstalled) {
    const { setupNestProject } = await inquirer.prompt([
      {
        name: "setupNestProject",
        type: "confirm",
        message: "Do you want to setup a new Nestjs project in this directory?",
      },
    ]);

    if (!setupNestProject) return true;

    const { packageManager } = await inquirer.prompt([
      {
        name: "packageManager",
        type: "select",
        message: "Which package manager do you want?",
        choices: resolvePm(),
      },
    ]);

    try {
      console.log("Setting up a Nestjs project...");
      execSync(`nest new --package-manager ${packageManager}`, {
        stdio: "inherit",
      });
      console.log("Nestjs project created");
      return true;
    } catch (error) {
      console.log("Nestjs project setup failed");
      console.log(error);
      return false;
    }
  } else return true;
}
