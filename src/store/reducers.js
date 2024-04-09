import {combineReducers} from 'redux';
import {FilmsReducer} from './films/reduser';
import {LocalStorageReducer} from './localstorage/reduser';

export default combineReducers({
  films: FilmsReducer,
  localStorage: LocalStorageReducer,
});
