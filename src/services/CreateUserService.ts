import { AppDataSource } from "../config/index";
import { UserRepository } from '../repositories/UserRepositories';
import { hash } from "bcryptjs";


class CreateUserService{

  async execute({email,password}){

    
    const user = await UserRepository.findOne({where:{email:email}})
    
    console.log("User do caralho: ",user)

    if(user){
      throw new Error("Usuário já existe");
    }

    const passwordHash = await hash(password, 8);
    
    UserRepository.create({
      email,
      password: passwordHash,
    });

  }
}
export { CreateUserService }