import chalk from "chalk";
import nestjsModules from "../util/modules.js";
import Table from "cli-table3";
export default function list() {
  console.log("Here are available Nestjs Packages you can install");
  const table = new Table({
    head: ["Name", "Category", "Packages"],
    colWidths: [30, 30, 40],
  });
  nestjsModules.forEach((m) => {
    table.push([m.name, m.category, m.packageNames.toString()]);
  });

  console.log(table.toString());

  console.log("Run `nestjs-helper install` for installation");
}
