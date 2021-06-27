import _ from "lodash";
import * as actionTypes from "./publicationTypes";
import {IPublication} from "../entities/publication";
import {Dispatch} from "redux";
import {getPhoto} from "./photoActions";
import {getUser} from "./usersActions";

export const getLatestPublications = (): Promise<IPublication[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json() as Promise<IPublication[]>)
        .then(async (publications: IPublication[]) => {
            const latestPublications = _.takeRight<IPublication>(publications, 4);
            for (const publication of latestPublications) {
                const creationDate = '5 days ago';
                const photo = await getPhoto(publication.id);
                const userPhoto = await getPhoto(publication.userId);
                const user = await getUser(publication.userId);
                publication.thumbnailUrl = photo.thumbnailUrl;
                publication.creationDate = creationDate;
                publication.author = user;

                user.photo = {
                    fullUrl: userPhoto.url,
                    thumbnailUrl: userPhoto.thumbnailUrl
                };
            }

            dispatch({
                type: actionTypes.GET_LATEST_PUBLICATIONS,
                latestPublications
            });
        });
}) as any;