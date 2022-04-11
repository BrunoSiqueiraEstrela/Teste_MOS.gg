
import { UserRepository } from '../repositories/UserRepositories';
import { hash } from "bcryptjs";
import { User } from "../entities/User";

class CreateUserService{

  async execute({ email, password }){
    try{
      const user = await UserRepository.findOne({where:{ email:email }})

      if(user){ 
        throw new Error("Usuário já existe");
      }
 
    const passwordHash = await hash(password, 8);

    const newUser = new User();

    newUser.experience = 0;
    newUser.email = email;
    newUser.password = passwordHash;
    newUser.points = 0;
    newUser.queue = 10;

    UserRepository.save(newUser)
    .then(() => {
      console.log("Usuário criado com sucesso!")
    })
    .catch((err) => {
      console.log("Erro ao criar usuário: ", err)
      throw new Error(err);
    });
  }catch(err){
    console.log("Erro ao criar usuário: ", err)
    throw new Error(err);
  }
}
}
export { CreateUserService }