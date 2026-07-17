import isNestjsCliInstalled from "../util/check-nest-cli.js";

export default function info() {
  console.log("Nestjs Information");
  console.log(isNestjsCliInstalled());
}
