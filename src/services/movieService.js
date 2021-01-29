
import http from "./httpService";
import {apiUrl} from '../config.json'
const Api = apiUrl + '/movies'
 export function getMovies() {
    return http.get(Api)
}

export function deleteMovie(movieId) {
    return http.delete(Api + '/' + movieId)
}