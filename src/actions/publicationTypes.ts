import {IPublication} from "../entities/publication";

export const GET_LATEST_PUBLICATIONS = 'GET_LATEST_PUBLICATIONS';

export interface IPublicationTypes {
    GET_LATEST_PUBLICATIONS: {
        latestPublications: IPublication[]
    }
}