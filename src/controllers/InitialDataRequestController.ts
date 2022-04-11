
import { User } from '../entities/User';
import { CreateChannelService } from '../services/CreateChannelService';
import { UpdateUserDataFromRequest } from '../services/UpdateUserDataFromRequest';
import { GetUsersTwitchIdService } from '../services/GetUsersTwitchIdService';
import { RequestTwitchChannelDataService } from '../services/RequestTwitchChannelDataService';
import { RequestTwitchUserDataService } from '../services/RequestTwitchUserDataService';

class InitialDataRequestController{

  async execute(){
    try{
    const getUsersTwitchIdService = new GetUsersTwitchIdService();
    const requestTwitchUserDataService = new RequestTwitchUserDataService();
    const requestTwitchChannelDataService = new RequestTwitchChannelDataService();
    const updateUserDataFromRequest = new UpdateUserDataFromRequest();
    const createChannelService = new CreateChannelService();
    const usersTwitchId = await getUsersTwitchIdService.execute();

    try{

      usersTwitchId.forEach(async (user:User) => {

      const userRequestedData = await requestTwitchUserDataService.execute(user.twitch_id);
      const channelRequestedData = await requestTwitchChannelDataService.execute(user.twitch_id, user);
      await updateUserDataFromRequest.execute(userRequestedData);
      await createChannelService.execute(channelRequestedData,user) 
    
        });

    }catch(err){
      console.log("Erro ao atualizar os dados : ", err)
      throw new Error(err);
    }finally{
      console.log( "Dados iniciais atualizados com sucesso!");
    }
    
    }catch(err){
      console.log("Erro ao iniciar dados: ", err)
      throw new Error(err);
    }
  }
}

export { InitialDataRequestController };