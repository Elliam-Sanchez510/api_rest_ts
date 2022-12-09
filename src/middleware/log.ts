import { NextFunction, Request, Response, } from 'express';

const logMiddleware = (req: Request, res: Response, nex: NextFunction) => {
console.log("hola soy el log");
res.send("Middleware")

};



export { logMiddleware };