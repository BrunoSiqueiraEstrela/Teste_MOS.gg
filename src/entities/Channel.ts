import { Entity, PrimaryGeneratedColumn, Column,  UpdateDateColumn, CreateDateColumn, JoinColumn, OneToOne} from "typeorm";
import { User } from "./User";

@Entity("channels")
export class Channel{
  @PrimaryGeneratedColumn()
  id: number
  @OneToOne(type  => User, User => User.id)
  @JoinColumn({name: "user_id"})
  user: User
  @Column()
  game_name: string
  @Column()
  title: string
  @Column()
  language: string
  @CreateDateColumn() 
  created_at: Date
  @UpdateDateColumn()  
  updated_at: Date

}
