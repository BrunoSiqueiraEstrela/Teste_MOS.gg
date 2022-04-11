import { Not } from "typeorm";
import { ChannelRepository } from "../repositories/ChannelRepositories";
import { AppDataSource } from '../config/index';
import { Channel } from "../entities/Channel";

class ListStreamersService{

  async execute(pageNumber:number){
          
         try{

        const limitPage:number = 10;
        const offsetPage:number = (pageNumber - 1) * limitPage;
      
        const userInnerColumn = await ChannelRepository
                .createQueryBuilder("channel")
                .innerJoinAndSelect("channel.user", "user")
                .where("user.follow_ticket  != :follow_ticket", {follow_ticket: 0})
                .orderBy(`(CASE WHEN user.queue > 0 THEN 1 ELSE 2 END)`)
                .addOrderBy("user.points", "DESC")
                .addOrderBy("user.experience", "DESC")
                .addOrderBy("user.created_at", "DESC")
                .skip(offsetPage)
                .take(limitPage)
                .getRawMany();

                return userInnerColumn;

       
        }catch(err){
                console.log("Erro ao listar usuários: ", err)
                throw new Error(err);
        }
  }
}

export { ListStreamersService }