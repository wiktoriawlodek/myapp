import {IPhoto} from "../entities/photo";

export const getPhoto = (id: number): Promise<IPhoto> => {
    return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json() as Promise<IPhoto>)
}
