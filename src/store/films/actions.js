import {getCurrentFilm, getFilms} from '../../API/API';

export const FILMS = 'films/FILMS';

export function getAllFilms(lang) {
  return async (dispatch) => {
    try {
      const response = await getFilms(lang);
      const result = response.data.results;
      // const count = response.data.count;
      dispatch({type: FILMS, data: result});
    } catch (e) {
      console.log(e.code);
    }
  };
}
export const CURRENT_FILM = 'films/CURRENT_FILM';

export function getInstantFilm(id, lang) {
  return async (dispatch) => {
    try {
      const response = await getCurrentFilm(id, lang);
      const result = response.data;
      dispatch({type: CURRENT_FILM, data: result});
    } catch (e) {
      console.log(e.code);
    }
  };
}
export const FILM_LANG = 'films/FILM_LANG';

export function getFilmLang(lang) {
  return {type: FILM_LANG, data: lang};
}
