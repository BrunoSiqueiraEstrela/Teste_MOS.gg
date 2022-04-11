import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepositories";

class UpdateUserDataFromRequest{

  async execute(user:User){
    try{
    await UserRepository.update(
      {twitch_id: user.twitch_id}
      ,
      {
        twitch_name: user.twitch_name,
        view_count: user.view_count,
        profile_image: user.profile_image
      }      
                ).catch((err) => {
          console.log("Erro ao atualizar usuário: ", err)
                  throw new Error(err);
        });
      }catch(err){
        console.log("Erro ao atualizar usuário: ", err)
        throw new Error(err);
      }
  }
}

export { UpdateUserDataFromRequest }