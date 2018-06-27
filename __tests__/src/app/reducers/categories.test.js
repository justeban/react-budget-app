'use strict';

import categoryReducer from '../../../../src/app/reducers/categories.js';

/*
  input (state, action)

  state = []; 
  
  action = {
  type: 'CATEGORY_CREATE',
  payload: {
    id: 123123,
    title: '',
    budget: '',
    Date: '',
  }
}
*/

describe('Category Reducer', () => {

  describe('CATEGORY_CREATE', () => {

    it('when given a valid payload, expect category to be created', () => {
      let initialState = [];

      let action = {
        type: 'CATEGORY_CREATE',
        payload: {
          id: 123,
          title: 'Clothing',
          budget: '100',
          Date: new Date(),
        },
      };
      let state = categoryReducer(initialState, action);
      expect(state[0].title).toBe('Clothing');
    });
    
    it('should keep what\'s already in state entact', () => {
      let initialState = [{
        id: 123,
        title: 'Clothing',
        budget: '100',
        Date: '2018 - 06 - 27T22: 46: 41.884Z',
      }];

      let action = {
        type: 'CATEGORY_CREATE',
        payload: {
          id: 456,
          title: 'Food',
          budget: '500',
          Date: new Date(),
        },
      };

      let state = categoryReducer(initialState, action);
      expect(state[0]).toBeDefined();
      expect(state[1]).toBeDefined();
    });
  });

  describe('CATEGORY_UPDATE', () => {
    
    it('should update existing category', () => {
      let initialState = [
        {
          id: 123,
          title: 'Clothing',
          budget: '100',
          Date: '2018 - 06 - 27T22: 46: 41.884Z',
        },
        {
          id: 456,
          title: 'Food', 
          budget: '800',
          Date: '2018',
        }];

      let action = {
        type: 'CATEGORY_UPDATE',
        payload: {
          id: 123,
          title: 'Clothing',
          budget: '3000',
          Date: '2018 - 06 - 27T22: 46: 41.884Z',
        },
      };

      let state = categoryReducer(initialState, action);
      expect(state[0].title).toBe('Clothing');
      expect(state[0].budget).toBe('3000');
      expect(state[1].title).toBe('Food');

    });
  });

  describe('CATEGORY_DESTROY', () => {

    it('should delete category according to id', () => {
      let initialState = [
        {
          id: 123,
          title: 'Clothing',
          budget: '100',
          Date: '2018 - 06 - 27T22: 46: 41.884Z',
        },
        {
          id: 456,
          title: 'Food',
          budget: '800',
          Date: '2018',
        }];

      let action = {
        type: 'CATEGORY_DESTROY', 
        payload: 456,
      };

      let state = categoryReducer(initialState, action);
      expect(state[0].title).toBeDefined();
      expect(state[1]).toBeUndefined();
    });
  });

  describe('DEFAULT', () => {
    it('if action.type, doesn\'t match any case, then we should just return initial state', () => {
      let initialState = [{
        id: 123,
        title: 'Clothing',
        budget: '100',
        Date: '2018 - 06 - 27T22: 46: 41.884Z',
      }];

      let action = {
        type: 'SOMETHING_UNIQUE',
        payload: {
          id: 567,
          title: 'FOOD',
          budget: '3000',
          Date: '2018 - 06 - 27T22: 46: 41.884Z',
        },
      };
      
      let state = categoryReducer(initialState, action);
      expect(state).toEqual(initialState);
    });
  });
});