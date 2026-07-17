// Check if @nestjs/cli is installed

import inquirer from "inquirer";
import isGlobalPackageInstalled from "./package-resolver.js";

export function isNestjsCliInstalled() {
  return isGlobalPackageInstalled("@nestjs/cli");
}

export async function promptInstallation() {
  console.log("Nestjs CLI is not installed on your machine");

  const { installCli } = await inquirer.prompt({
    installCli: {
      type: "confirm",
      message: "Do you want to  install it",
    },
  });
  console.log(installCli);
}
