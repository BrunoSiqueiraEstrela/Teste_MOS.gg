import { Request, Response, NextFunction } from 'express';

export function Page(request:Request, response: Response, next: NextFunction)
 {
   
   try{

    const page = parseInt(request.query.page);
    if(!page){
      request.query.page= "1";
      }
  
    return next();
   }
  catch(err){
  
    return response.status(400).json({
      error: "Invalid page"
    })
  }
}
 