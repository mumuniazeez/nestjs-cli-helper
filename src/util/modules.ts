interface Module {
  name: string;
  category: string;
  packageName: string[];
}
const nestjsModules: Module[] = [
  { name: "Core", category: "Core / Common", packageName: ["@nestjs/core"] },
];
