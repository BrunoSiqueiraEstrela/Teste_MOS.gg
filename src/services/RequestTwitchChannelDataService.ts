import axios from 'axios';

class RequestTwitchChannelDataService{
    
     async getTwitchChannelData(broadcaster_id: string): Promise<any>{
       const token = 'yo7js2lv8pwggwpcjy4drkjr1nsclr';
        const url = ` https://api.twitch.tv/helix/channels?broadcaster_id=${broadcaster_id}`;
        const config = {
            headers: {
                'Client-Id': 'uv7193jvckpj3ywybj3bt6kdup6q22',
                Authorization: `Bearer ${token}`
            }
        }
        try{
          const response = await axios.get(url,config);
          return response.data;
        }catch(err){
            console.log("Error: ", err);
        }
    }
  
}

export { RequestTwitchChannelDataService };

