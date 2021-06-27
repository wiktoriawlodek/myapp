import * as actionTypes from '../actions/workTypes';
import { IWork } from '../entities/work';

export interface IWorksReducer {
    works: IWork[] | null;
}

const defaultState = (): IWorksReducer => ({
    works: null,
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_YOUR_WORKS: {
            const data: actionTypes.IWorkTypes['GET_YOUR_WORKS'] = action;
            return {
                ...state,
                works: data.works
            }
        }

        default: {
            return state;
        }
    }
}

