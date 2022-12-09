import { Schema, Types, model, Model } from "mongoose";
import { Car } from '../interfaces/car.interface';

const ItemSchema = new Schema<Car>(
    {
        categoria: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        fecha: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;