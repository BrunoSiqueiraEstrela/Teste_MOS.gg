import { DataSource } from 'typeorm';
import { User } from './src/entity/User.js';
import { Channel } from '../entities/Channel.js';

export const AppDataSource = new DataSource({
 
  type: "sqlite",
  database: "src/databases/database.sqlite",
  migrations: ["src/databases/migrations/*.js"],
  entities: [ User, Channel ],
  cli: {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities/"
  },
  sync:false
});


