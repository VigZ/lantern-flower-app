import React from 'react';
import renderer from 'react-test-renderer';

import searchReducer from './src/reducers/searchReducer.js'

describe('SearchReducer', () => {
  it('should return an empty initial state', () => {
     const initialState = { businessList: []}
     const action = { type: 'dummy_action' }
    expect(searchReducer(undefined, action)).toEqual(initialState)
  })
  it('should add business objects into state with SET_RESULT_LIST', () => {
      const mockBusinessList = {businesses:[{name: 'Business1'}, {name: 'Business2'}, {name: 'Business3'}]}
      const expectedResponse = {businessList: [...mockBusinessList.businesses]}
    expect(
      searchReducer(undefined, {
        type: 'SET_RESULT_LIST',
        payload: mockBusinessList
      })
    ).toEqual(expectedResponse)
  })
})

//Reducer Tests

// const list = ['a', 'b', 'c'];
// describe('App', () => {
//   describe('Reducer', () => {
//     it('should set a list', () => {
//       const state = { list: [], error: null };
//       const newState = dataReducer(state, {
//         type: 'SET_LIST',
//         list,
//       });
//       expect(newState).toEqual({ list, error: null });
//     });
//     it('should reset the error if list is set', () => {
//       const state = { list: [], error: true };
//       const newState = dataReducer(state, {
//         type: 'SET_LIST',
//         list,
//       });
//       expect(newState).toEqual({ list, error: null });
//     });
//     it('should set the error', () => {
//       const state = { list: [], error: null };
//       const newState = dataReducer(state, {
//         type: 'SET_ERROR',
//       });
//       expect(newState.error).toBeTruthy();
//     });
//   });
