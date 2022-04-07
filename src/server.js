import express from "express";
import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";

import { UserEntity,User } from "./entities/User.js";
import { Channel } from "./entities/Channel.js";

const app = express();
app.use(express.json());


const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/databases/database.sqlite",

  migrations: ["./src/databases/migrations/*.js"],
  entities: [UserEntity, Channel],
  // User, Channel
  cli: {
    migrationsDir: "./src/database/migrations",
    entitiesDir: "./src/entities/",
  },
  sync: false,
});

AppDataSource.initialize()
  .then(async () => {

   const userMetadata = dataSource.getMetadata(UserEntity)

  })
  .catch((error) => console.log("Database initialization error: ", error));
