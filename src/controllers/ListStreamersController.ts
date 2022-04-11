import { Request, Response } from 'express';
import {  ListStreamersService } from '../services/ListStreamersService';

class ListStreamersController {

  async handle(request: Request, response: Response) {

    try{ 

      const listStreamersService = new ListStreamersService();
      const pageList = request.query.page;
      
      return response.json(await listStreamersService.execute(pageList));
      
    }catch(err){
         console.log(err);
        return response.status(400).json({
          error: err.message
        });
    }
  }
}

export { ListStreamersController };