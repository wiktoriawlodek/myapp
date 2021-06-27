import {Dispatch} from "redux";
import _ from 'lodash';
import * as actionTypes from './workspacesUpdateTypes';
import store from "../tools/store";
import {IWorkspacesUpdate} from "../entities/workspaces-update";


export const getWorkspacesUpdates = (): Promise<IWorkspacesUpdate[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(async (workspacesUpdates: IWorkspacesUpdate[]) => {
            for (const workspacesUpdate of workspacesUpdates) {
                const userId = Math.floor(Math.random() * 10) + 1;
                const users = store.getState().users.usersList;
                const followed = userId % 2 == 0;
                const type: string = _.sample(['SAS', 'SARL', 'Secondary business', 'Communities', 'POA', 'Survey']) ?? 'undefined';

                workspacesUpdate.author = users[userId];
                workspacesUpdate.followed = followed;
                workspacesUpdate.type = type;
            }

            dispatch({
                type: actionTypes.GET_WORKSPACES_UPDATES,
                workspacesUpdates
            })
        });
}) as any;