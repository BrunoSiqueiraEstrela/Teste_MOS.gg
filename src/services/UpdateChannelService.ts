import { Channel } from "../entities/Channel";
import { ChannelRepository } from "../repositories/ChannelRepositories";

class UpdateChannelService{

  async execute(Channel:Channel){
    try{
    const channelUpdated = await ChannelRepository.update(Channel,Channel);
    return channelUpdated;
    }catch(err){
      console.log("Erro ao atualizar canal: ", err)
      throw new Error(err);
    }
  }
}

export { UpdateChannelService }