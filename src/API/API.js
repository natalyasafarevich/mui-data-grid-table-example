import axios from 'axios';

const API_KEY = '9bf882d81b0db61ffc899ee4174392dd';

export function getFilms(lang) {
  return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${lang ? lang :"en-US"}`)
}
export function getCurrentFilm(id, lang) {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?language=${lang ? lang :"en-US"}&api_key=${API_KEY}`)
}
