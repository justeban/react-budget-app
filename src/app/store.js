import { createStore, combineReducers } from 'redux';

import categoryReducer from './reducers/categories';
import expenseReducer from './reducers/expenses';

let reducers = combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer,
});

export default () => createStore(reducers);