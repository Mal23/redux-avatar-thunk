import reducer from './characterDetailReducer.js';
import { FETCH_CHARACTER, FETCH_CHARACTER_LOADING } from '../actions/characterDetailActions';

describe('characters reducer', () => {
  it('handles the fetch character action', () => {
    const initialState = {
      loading: true,
      character: {},
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER,
      payload: { name: 'hi' }
    });

    expect(newState).toEqual({
      loading: false,
      character: { name: 'hi' },
      error: null
    });
  });

  it('handles the fetch character loading action', () => {
    const initialState = {
      loading: false,
      character: {},
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      character: {},
      error: null
    });
  });
});
