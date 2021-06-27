import { ISingleUser } from "./users";

export interface IWorkspacesUpdate {
    id: number;
    postId: number;
    author: ISingleUser;
    name: string;
    body: string;
    type: string;
    followed: boolean;
}
