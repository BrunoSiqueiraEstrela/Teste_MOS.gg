
import { EntitySchema } from "typeorm"
//id,experience,points,queue,follow_ticket,
//twitch_id,twitch_name,view_count,profile_image,
//email,password,created_at,updated_at.

export class User{
 
  constructor(id,experience,points,queue,
              follow_ticket,twitch_id,twitch_name,
              view_count,profile_image,email,password,
              created_at,updated_at){

  this.id = id
  this.experience = experience
  this.points = points                                    
  this.queue = queue
  this.follow_ticket = follow_ticket
  this.twitch_id = twitch_id
  this.twitch_name = twitch_name
  this.view_count = view_count
  this.profile_image = profile_image
  this.email = email
  this.password = password
  this.created_at = created_at
  this.updated_at = updated_at
  }
}

export const UserEntity = new EntitySchema({
  
  name: "users",
  target: User,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    experience: {
      type: "int"
    },
    points: {
      type: "int"
    },
    queue: {
      type: "int"
    },
    follow_ticket: {
      type: "int"
    },
    twitch_id: {
      type: "int"
    },
    twitch_name: {
      type: "varchar"
    },
    view_count: {
      type: "int"
    },
    profile_image: {
      type: "varchar"
    },
    email: {
      type: "varchar"
    },
    password: {
      type: "varchar"
    },
    created_at: {
      type: "varchar"
    },
    updated_at: {
      type: "varchar"
    }
  }
});

