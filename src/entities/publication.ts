import { ISingleUser } from "./users";

export interface IPublication {
    id: number;
    userId: number;
    author: ISingleUser;
    title: string;
    body: string;
    thumbnailUrl: string;
    creationDate: string;
}