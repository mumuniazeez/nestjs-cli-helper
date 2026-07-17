import { execSync } from "child_process";
import {
  isNestjsCliInstalled,
  promptInstallation,
} from "../util/check-nest-cli.js";

export default async function info() {
  const nestInstalled = isNestjsCliInstalled()
  if (!nestInstalled) {
    const done = await promptInstallation();
    if (!done) return;
  }

  console.log(execSync("nest i").toString().trim());
}
