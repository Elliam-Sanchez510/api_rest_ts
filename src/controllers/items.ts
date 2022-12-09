import { Request, Response, request, response } from 'express';
import dbConnect from '../config/mongo';
import { insertCar, getCars, getCar, updateCar, deleteCar } from '../services/item';
import { handletHttp } from '../utils/error.handle';

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCar(id);
        const data = response ? response: "Not Found";
        res.send(response);

    } catch (e) {
        handletHttp(res, "ERROR_POST_ITEM");
    }
};

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response);
    } catch (e) {
        handletHttp(res, "ERROR_GET_ITEMS");
    }
}

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await updateCar(id, body);
        res.send(response);
    } catch (error) {
        
    }
};

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (e) {
        handletHttp(res, "ERROR_POST_ITEM", e)
    }
};

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCar(id);
        res.send(response);
    } catch (e) {
        handletHttp(res, "ERROR_DELETE_IT")
    }
};


export { getItem, getItems, postItem, deleteItem, updateItem };