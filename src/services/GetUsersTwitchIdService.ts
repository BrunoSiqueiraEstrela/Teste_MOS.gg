import { IsNull } from 'typeorm';
import { UserRepository } from '../repositories/UserRepositories';


class GetUsersTwitchIdService{

  async execute(){
    try{
    const users = await UserRepository.find({
      where:{
        email: IsNull(),
      },
    });
    
    return users;

  }catch(err){
    console.log("Erro ao buscar usuários: ", err)
    throw new Error(err);
  }
}
}

export { GetUsersTwitchIdService }