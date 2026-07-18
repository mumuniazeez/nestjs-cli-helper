import { execSync } from "child_process";
import { promptInstallation } from "../util/check-nest-cli.js";

export default async function info() {
  const done = await promptInstallation();
  if (!done) return;

  console.log(execSync("nest i").toString().trim());
}
