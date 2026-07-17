import { execSync } from "child_process";

type PackageManager = "npm" | "pnpm" | "yarn";

function commandExist(cmd: string): boolean {
  try {
    execSync(`which ${cmd}`, { stdio: "ignore" });
    return true;
  } catch (error) {
    return false;
  }
}

export default function resolvePm() {
  return (["npm", "pnpm", "yarn"] as PackageManager[]).filter(commandExist);
}
