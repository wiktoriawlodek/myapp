import {IWork} from "../entities/work";

export const GET_YOUR_WORKS = 'GET_YOUR_WORK';

export interface IWorkTypes {
    GET_YOUR_WORKS: {
        works: IWork[]
    }
}