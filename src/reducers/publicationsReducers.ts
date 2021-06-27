import * as actionTypes from "../actions/publicationTypes";
import { IPublication } from "../entities/publication";

export interface IPublicationsReducer {
    latestPublications: IPublication[];
}

const defaultState = (): IPublicationsReducer => ({
    latestPublications: []
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_LATEST_PUBLICATIONS: {
            const data: actionTypes.IPublicationTypes['GET_LATEST_PUBLICATIONS'] = action;
            return {
                ...state,
                latestPublications: data.latestPublications
            }
        }
        default: {
            return state;
        }
    }
}
