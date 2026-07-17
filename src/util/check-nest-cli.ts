// Check if @nestjs/cli is installed

import isGlobalPackageInstalled from "./package-resolver.js";

export default function isNestjsCliInstalled() {
  return isGlobalPackageInstalled("@nestjs/cli");
}
