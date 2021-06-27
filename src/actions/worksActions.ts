import {IWork} from "../entities/work";
import {Dispatch} from "redux";
import * as actionTypes from './workTypes';
import store from "../tools/store";

export const getWorks = (): Promise<IWork[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(async (works: IWork[]) => {
            for (const work of works) {
                const userId = Math.floor(Math.random() * 10) + 1;
                const users = store.getState().users.usersList;
                const followed = userId % 2 == 0;

                work.author = users[userId];
                work.followed = followed;
            }

            dispatch({
                type: actionTypes.GET_YOUR_WORKS,
                works
            })
        });
}) as any;