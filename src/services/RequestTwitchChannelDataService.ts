import axios from 'axios';
import { TwitchApiAuthorization } from '../config/TwitchConfig';
import { Channel } from '../entities/Channel';
import { User } from '../entities/User';

class RequestTwitchChannelDataService{
    
     async execute(broadcaster_id: string, user:User): Promise<any>{
 
        const url = `https://api.twitch.tv/helix/channels?broadcaster_id=${broadcaster_id}`;
        
        try{

            const response = await axios.get(url,TwitchApiAuthorization);

            const newChannelData = JSON.parse(JSON.stringify(response.data));

            const channel = new Channel();

            channel.user = user;
            channel.game_name = newChannelData.data[0].game_name;
            channel.title = newChannelData.data[0].title;
            channel.language = newChannelData.data[0].broadcaster_language;
            
            return channel;

        }catch(err){
            console.log("Error: ", err);
            throw new Error(err);
        }
    }
  
}

export { RequestTwitchChannelDataService };

