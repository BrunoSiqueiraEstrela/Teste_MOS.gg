import { Entity, PrimaryGeneratedColumn, Column,  UpdateDateColumn, CreateDateColumn} from "typeorm";


@Entity("channels")
export class Channel{
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  user_id: number
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
