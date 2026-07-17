import {isNestjsCliInstalled,promptInstallation} from "../util/check-nest-cli.js";

export default function info() {
  if (!isNestjsCliInstalled()) {
    const done = promptInstallation()
    if (!done) return
  }
}
