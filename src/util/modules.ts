interface Module {
  name: string;
  category: string;
  packageNames: string[];
}
const nestjsModules: Module[] = [
  {
    name: "Core",
    category: "Core / Common",
    packageNames: ["@nestjs/core", "@nestjs/common"],
  },
  {
    name: "Platform Fastify",
    category: "Core / Common",
    packageNames: ["@nestjs/platform-fastify"],
  },
  {
    name: "Config",
    category: "Configuration & Environment",
    packageNames: ["@nestjs/config"],
  },
  {
    name: "TypeORM",
    category: "Database / ORM",
    packageNames: ["@nestjs/typeorm", "typeorm"],
  },
  {
    name: "Mongoose",
    category: "Database / ORM",
    packageNames: ["@nestjs/mongoose", "mongoose"],
  },
  {
    name: "Sequelize",
    category: "Database / ORM",
    packageNames: ["@nestjs/sequelize", "sequelize"],
  },
  {
    name: "Swagger",
    category: "API  Documentation",
    packageNames: ["@nestjs/swagger"],
  },
  {
    name: "Passport",
    category: "Authentication & Security",
    packageNames: ["@nestjs/passport", "passport"],
  },
  {
    name: "JWT",
    category: "Authentication & Security",
    packageNames: ["@nestjs/jwt"],
  },
  {
    name: "Throttler (rate limiting)",
    category: "Authentication & Security",
    packageNames: ["@nestjs/throttler"],
  },
  {
    name: "Testing",
    category: "Testing",
    packageNames: ["@nestjs/testing"],
  },
  {
    name: "Testing",
    category: "Testing",
    packageNames: ["@nestjs/testing"],
  },
];

export default nestjsModules