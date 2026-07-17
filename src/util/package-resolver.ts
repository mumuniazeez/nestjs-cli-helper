import isInstalledGlobally from "is-installed-globally";
import { resolveGlobal } from "resolve-global";
import { existsSync } from "fs";

export default function isGlobalPackageInstalled(packageName: string) {
  try {
      console.log(packageName);
    const resolvedPath = resolveGlobal(packageName);
    return existsSync(resolvedPath);
  } catch {
    return false;
  }
}
