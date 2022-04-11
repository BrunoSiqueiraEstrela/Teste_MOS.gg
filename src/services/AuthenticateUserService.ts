import { UserRepository } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import 'dotenv/config';

class AuthenticateUserService{

  async execute({email, password}){
    try{
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
      { user_id:user.id,email: user.email },
      process.env.SECRET , 
      {expiresIn: 300,});
    const jsonResponse = {
      "token": token
    }
      return jsonResponse;
  }catch(err){
    console.log("Erro ao autenticar usuário: ", err)
    throw new Error(err);
  } 
}
}
 
export { AuthenticateUserService };
