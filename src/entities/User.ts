
import { Entity, PrimaryGeneratedColumn, Column,  UpdateDateColumn, CreateDateColumn} from "typeorm";
//id,experience,points,queue,follow_ticket,
//twitch_id,twitch_name,view_count,profile_image,
//email,password,created_at,updated_at.

@Entity('users')
export class User{

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  experience: number;
  @Column()
  points: number;
  @Column()                                    
  queue: number;
  @Column()                                    
  follow_ticket: number;
  @Column()                                    
  twitch_id: string;
  @Column()                                    
  twitch_name: string;
  @Column()                                    
  view_count: number;
  @Column()                                    
  profile_image: string;
  @Column()                                    
  email: string;
  @Column()                                    
  password: string;
  @CreateDateColumn()                                    
  created_at: Date;
  @UpdateDateColumn()                                    
  updated_at: Date;
}
