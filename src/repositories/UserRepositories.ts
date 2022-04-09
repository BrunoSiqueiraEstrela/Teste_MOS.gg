import { AppDataSource } from '../config/index';

export const UserRepository = AppDataSource.getRepository('users');