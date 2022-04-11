import { Request, Response } from 'express';
import { FollowService } from '../services/FollowService';

class FollowController{

  async handle(request: Request, response: Response) {

    try{

    const id = request.params.id;

    const followService = new FollowService();

     const follow = await followService.execute(id);

      return response.json(follow);
    }catch(err){
      return response.status(400).json({
        error: err.message
      })
    }
  }
}

export { FollowController }