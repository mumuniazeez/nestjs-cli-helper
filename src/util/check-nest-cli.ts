// Check if @nestjs/cli is installed

import inquirer from "inquirer";
import isGlobalPackageInstalled from "./package-resolver.js";
import resolvePm from "./resolve-pm.js";
import { execSync } from "child_process";
import ora from "ora";

export function isNestjsCliInstalled() {
  return isGlobalPackageInstalled("@nestjs/cli");
}

export async function promptInstallation(): Promise<boolean> {
  console.log("Nestjs CLI is not installed on your machine");

  const { installCli, setupNestProject } = await inquirer.prompt({
    installCli: {
      type: "confirm",
      message: "Do you want to  install it",
    },
    setupNestProject: {
      type: "confirm",
      message: "Do you want to setup a new Nestjs project in this directory?",
    },
  });

  if (!installCli) {
    console.log("Nestjs CLI has to be installed to continue");
    return false;
  }

  // const { packageManager } = await inquirer.prompt({
  //   packageManager: {
  //     message: "Which package manager do you want?",
  //     type: "select",
  //     choices: resolvePm(),
  //   },
  // });

  // console.log(packageManager);

  const spinner = ora("Installing Nestjs CLI").start();
  try {
    execSync(`npm install -g @nestjs/cli`);
    spinner.succeed("Nestjs CLI installed");
  } catch (error) {
    spinner.fail("Nestjs CLI failed to install");
    console.log(error);
    return false;
  }
  if (setupNestProject) {
    const spinner = ora("Setting up a Nestjs project in ./").start();
    try {
      execSync(`nest new ./`);
      spinner.succeed("Nestjs CLI installed");
      return true;
    } catch (error) {
      spinner.fail("Nestjs CLI failed to install");
      console.log(error);
      return false;
    }
  } else return true;
}
