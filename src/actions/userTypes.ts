import { ISingleUser } from '../entities/users';

export const GET_USERS = 'GET_USERS';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const PUSH_DATA = 'PUSH_DATA';

export interface IUserTypes { 
    GET_USERS: {
        usersList: ISingleUser[];
    };

    GET_CURRENT_USER: {
        user: ISingleUser;
    };

    PUSH_DATA: {
        someData: string;
    };
}   