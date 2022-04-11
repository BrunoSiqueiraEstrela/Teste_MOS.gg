import { Request, Response, NextFunction } from 'express';
import { verify } from "jsonwebtoken";

export function Auth(request:Request, response: Response, next: NextFunction)
 {
   const authHeader = request.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];
     if (!token) {
      return response.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = verify(token, process.env.SECRET);
    } catch (err) {
      return response.status(401).send("Invalid Token");
    }
  return next();
}

