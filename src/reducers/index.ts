import {combineReducers } from 'redux';

import users, { IUsersReducer } from "./usersReducers";
import works, { IWorksReducer } from "./worksReducers";
import publications, { IPublicationsReducer } from "./publicationsReducers";
import workspacesUpdates, {IWorkspacesUpdatesReducer} from "./workspacesUpdatesReducers";

export interface IState{
    users: IUsersReducer;
    works: IWorksReducer;
    publications: IPublicationsReducer;
    workspacesUpdates: IWorkspacesUpdatesReducer;
}

export default combineReducers({
    users,
    works,
    publications,
    workspacesUpdates
})

