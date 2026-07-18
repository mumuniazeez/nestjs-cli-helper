import inquirer from "inquirer";
import nestjsModules from "../util/modules.js";
import resolvePm from "../util/resolve-pm.js";
import ora from "ora";
import { execSync } from "child_process";
import { promptInstallation } from "../util/check-nest-cli.js";

export default async function install() {
  const done = await promptInstallation();
  if (!done) return;

  const {
    packages,
    packageManager,
  }: { packages: (typeof nestjsModules)[0]["name"][]; packageManager: string } =
    await inquirer.prompt({
      packages: {
        type: "checkbox",
        choices: nestjsModules.map((m) => m.name),
        message: "",
        validate: (c) => c.length !== 0,
      },
      packageManager: {
        type: "select",
        message: "Select the packager manager to use",
        choices: resolvePm(),
      },
    });

  console.log(`Installing modules using ${packageManager}`);

  packages.forEach((pN) => {
    console.log(`Installing ${pN}`);
    const packageNames = nestjsModules.find((p) => p.name === pN)!.packageNames;

    packageNames.forEach((pac) => {
      const installationCommand =
        packageManager === "npm"
          ? `npm install ${pac}`
          : `${packageManager} add ${pac}`;

      const installationSpinner = ora(installationCommand).start();

      try {
        execSync(installationCommand);
        installationSpinner.succeed();
      } catch (error) {
        installationSpinner.fail();
        console.log(error);
      }
    });
  });
}
