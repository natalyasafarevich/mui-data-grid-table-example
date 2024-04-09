import {CURRENT_FILM, FILMS, FILM_LANG} from './actions';

const initialState = {
  films: [],
  current_film: {},
  lang: '',
};

export const FilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILMS:
      return {
        ...state,
        films: action.data,
      };
    case CURRENT_FILM:
      return {
        ...state,
        current_film: action.data,
      };
    case FILM_LANG:
      return {
        ...state,
        lang: action.data,
      };

    default:
      return state;
  }
};
