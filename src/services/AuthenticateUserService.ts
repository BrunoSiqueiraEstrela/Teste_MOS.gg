import { UserRepository } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import 'dotenv/config';
import { User } from "../entities/User";

class AuthenticateUserService{

  async execute({email,password}){

    const user = await UserRepository.findOne({
      where: {
        email: email,
      },
    }) as any;
    

    if(!user){
      throw new Error("Usuário não encontrado");
    }
    
    const passwordMatched = await compare(password, user.password);
    user.password = undefined;
    if(!passwordMatched){
      
      throw new Error("Senha ou email incorreta");
      
    }
    //generate token
    const token = sign(
      { email: user.email },
      process.env.SECRET , 
      {expiresIn: 300,});
      return token;
  
} 
}
 
export { AuthenticateUserService };
