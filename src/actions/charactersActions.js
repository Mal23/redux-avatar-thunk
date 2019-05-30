import { getCharacters } from '../services/avatarApi';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  _,
  FETCH_CHARACTERS_ERROR 
] = createAction('FETCH_CHARACTERS', getCharacters);
