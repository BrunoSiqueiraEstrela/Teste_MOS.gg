import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Channel } from '../entities/Channel';

export const AppDataSource = new DataSource(
  {
  type: "sqlite",
  database: "src/databases/database.sqlite",
  migrations: ["src/databases/migrations/*.ts"],
  entities: [ User, Channel ],
  synchronize: false,
  }
)


