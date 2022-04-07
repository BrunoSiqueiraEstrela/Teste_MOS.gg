import { EntitySchema} from "typeorm";

export class Channel{
  constructor(id,user_id,game_name,title,language,created_at,updated_at){
    this.id = id
    this.user_id = user_id
    this.game_name = game_name
    this.title = title
    this.language = language
    this.created_at = created_at
    this.updated_at = updated_at
  }
    
}
export default new EntitySchema({
  name: "channels",
  target: Channel,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    user_id: {
      type: "int"
    },
    game_name: {
      type: "varchar"
    },
    title: {
      type: "varchar"
    },
    language: {
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