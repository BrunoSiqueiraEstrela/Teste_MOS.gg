
import { ChannelRepository } from '../repositories/ChannelRepositories';
import { UpdateChannelService } from './UpdateChannelService';
import { Channel } from '../entities/Channel';
import { User } from '../entities/User';

class CreateChannelService{

  async execute(channel:Channel,user:User){
    try{
      channel.user = user;

      const ChannelExist = await ChannelRepository.findOne({
        where:{
          id: channel.id,
        },
      });
      if(ChannelExist){

          const updateChannelService = new UpdateChannelService();
          const channelUpdated = await updateChannelService.execute(channel);
          return channelUpdated;
        }

    const channelInserted = await ChannelRepository.save(channel);
      return channelInserted;
    }catch(err){
      console.log("Erro ao criar canal: ", err)
      throw new Error(err);
    }
  }
}

export { CreateChannelService }