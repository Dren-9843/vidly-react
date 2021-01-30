import { apiUrl } from '../config.json'
import http from './httpService'

export function getMovies() {
    return http.get(apiUrl + '/movies')
}

export function deleteMovie(movieId) {
    return http.delete(apiUrl + '/movies/' + movieId)
}

export function getMovie(movieId) {
    return http.get(apiUrl)
}