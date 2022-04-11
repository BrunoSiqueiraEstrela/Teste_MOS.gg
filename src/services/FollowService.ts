import { UserRepository } from "../repositories/UserRepositories";

class FollowService{

 async execute(id) {
  try{
    const user = await UserRepository.findOne({
      where:{
        id: id,
      },
    });

    if(!user){
      throw new Error("Usuário não encontrado");
    }
    
    await UserRepository.decrement({id: id},'queue',1);
    
  }catch(err){
    console.log("Erro ao seguir: ", err)
    throw new Error(err);
  }
}
}

export { FollowService }