import axios from 'axios';
import { TwitchApiAuthorization } from '../config/TwitchConfig';
import { User } from '../entities/User';
class RequestTwitchUserDataService{
    
     async execute(users_id: string): Promise<any>{
       
        const url = ` https://api.twitch.tv/helix/users?id=${users_id}`;
        try{
          const response = await axios.get(url,TwitchApiAuthorization);

          const newUserData = JSON.parse(JSON.stringify(response.data));

          const user = new User();

          user.twitch_id = users_id;
          user.twitch_name = newUserData.data[0].display_name;
          user.view_count = newUserData.data[0].view_count;
          user.profile_image = newUserData.data[0].profile_image_url;

          return user;

        }catch(err){
            console.log("Error: ", err);
            throw new Error(err);
            
        }
    }
  
}

export { RequestTwitchUserDataService };

