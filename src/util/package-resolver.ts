import isInstalledGlobally from "is-installed-globally";
import { resolveGlobal } from "resolve-global";
import { existsSync } from "fs";
import { execSync } from "child_process";
import path from "path";

export default function isGlobalPackageInstalled(packageName: string) {
  try {
    const globalRootPath = execSync("npm root -g").toString().trim();
    return existsSync(path.join(globalRootPath, packageName, "package.json"));
  } catch (e) {
    console.log(e);
    return false;
  }
}
