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
    name: "Platform Express",
    category: "Core / Common",
    packageNames: ["@nestjs/platform-express"],
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
    name: "Swagger (OpenAPI)",
    category: "API Documentation",
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
    name: "Microservices",
    category: "Microservices & Messaging",
    packageNames: ["@nestjs/microservices"],
  },
  {
    name: "CQRS",
    category: "Microservices & Messaging",
    packageNames: ["@nestjs/cqrs"],
  },
  {
    name: "GraphQL (Apollo)",
    category: "GraphQL",
    packageNames: [
      "@nestjs/graphql",
      "@nestjs/apollo",
      "@apollo/server",
      "graphql",
    ],
  },
  {
    name: "GraphQL (Mercurius)",
    category: "GraphQL",
    packageNames: [
      "@nestjs/graphql",
      "@nestjs/mercurius",
      "graphql",
      "mercurius",
    ],
  },
  {
    name: "Cache Manager",
    category: "Caching",
    packageNames: ["@nestjs/cache-manager", "cache-manager"],
  },
  {
    name: "Schedule (cron jobs)",
    category: "Task Scheduling & Queues",
    packageNames: ["@nestjs/schedule"],
  },
  {
    name: "Bull (Redis queues, legacy)",
    category: "Task Scheduling & Queues",
    packageNames: ["@nestjs/bull", "bull"],
  },
  {
    name: "BullMQ (newer, recommended)",
    category: "Task Scheduling & Queues",
    packageNames: ["@nestjs/bullmq", "bullmq"],
  },
  {
    name: "WebSockets",
    category: "Real-time / WebSockets",
    packageNames: ["@nestjs/websockets"],
  },
  {
    name: "Platform Socket.io",
    category: "Real-time / WebSockets",
    packageNames: ["@nestjs/platform-socket.io"],
  },
  {
    name: "Serve Static",
    category: "File Handling",
    packageNames: ["@nestjs/serve-static"],
  },
  { name: "Testing", category: "Testing", packageNames: ["@nestjs/testing"] },
  {
    name: "CLI (global)",
    category: "CLI & Dev Tools",
    packageNames: ["@nestjs/cli"],
  },
  {
    name: "Schematics",
    category: "CLI & Dev Tools",
    packageNames: ["@nestjs/schematics"],
  },
  {
    name: "Devtools",
    category: "CLI & Dev Tools",
    packageNames: ["@nestjs/devtools-integration"],
  },
  {
    name: "Terminus",
    category: "Terminus (Health Checks)",
    packageNames: ["@nestjs/terminus"],
  },
  {
    name: "Elasticsearch",
    category: "Elasticsearch",
    packageNames: ["@nestjs/elasticsearch", "@elastic/elasticsearch"],
  },
];

export default nestjsModules;
