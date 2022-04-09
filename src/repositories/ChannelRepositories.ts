import { AppDataSource } from '../config/index';

export const ChannelRepository = AppDataSource.getRepository('channels');