import { Dispatch } from 'redux';
import * as actionTypes from '../actions/userTypes';
import { ISingleUser } from '../entities/users';
import { getPhoto } from "./photoActions";

export const getUser = (id: number): Promise<ISingleUser> => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json() as Promise<ISingleUser>);
};

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(async (usersList: ISingleUser[]) => {
            for (const user of usersList) {
                const userPhoto = await getPhoto(user.id);
                user.photo = {
                    fullUrl: userPhoto.url,
                    thumbnailUrl: userPhoto.thumbnailUrl
                }};
            
            dispatch({
                type: actionTypes.GET_USERS,
                usersList
            })
        })
}) as any;

export const getCurrentUser = (): Promise<ISingleUser> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users/6')
        .then(response => response.json())
        .then(async (user: ISingleUser) => {
            const userPhoto = await getPhoto(user.id);
            user.photo = {
                fullUrl: userPhoto.url,
                thumbnailUrl: userPhoto.thumbnailUrl
            };
            dispatch({
                type: actionTypes.GET_CURRENT_USER,
                user
            })
        });
}) as any;


export const getSomeData = (someData: string): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {
    dispatch({
        type: actionTypes.PUSH_DATA,
        someData
    })
}) as any;

