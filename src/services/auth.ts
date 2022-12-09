import { Auth } from '../interfaces/auth.interface';
import UserModel from '../models/user';
import { User } from '../interfaces/user.interface';

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email, password});
    if (checkIs) return "ALLREADY_USER";
    const registerNewUser = await UserModel.create({ email, password, name });
    return registerNewUser;
};

const loginUser = async () => {
};

export { registerNewUser, loginUser}