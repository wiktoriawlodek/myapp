import {ISingleUser} from '../entities/users';
import * as actionTypes from '../actions/userTypes';

export interface IUsersReducer {
    usersList: ISingleUser[];
    currentUser: ISingleUser | null;
    someData: string;
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    currentUser: null,
    someData: 'Ala już nie ma kota.'
});

export default (state = defaultState(), action: any) => {
    switch(action.type){

        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: data.usersList
            } 
        } 

        case actionTypes.GET_CURRENT_USER: {
            const data: actionTypes.IUserTypes['GET_CURRENT_USER'] = action;
            return {
                ...state,
                currentUser: data.user
            }
        }

        case actionTypes.PUSH_DATA: {
            const data: actionTypes.IUserTypes['PUSH_DATA'] = action;
            return{
                ...state,
                someData: data.someData
            }
        }
        default: {
            return state
        }
    }
}

