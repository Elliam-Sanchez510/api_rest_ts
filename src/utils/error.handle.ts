import { Response, response } from 'express';

const handletHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    
    res.status(500)
    res.send({ error });
};

export { handletHttp };