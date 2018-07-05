import { createStore, combineReducers, applyMiddleware } from 'redux';

import reporter from './middleware/reporter.js';

import categoryReducer from './reducers/categories';
import expenseReducer from './reducers/expenses';

let reducers = combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer,
});

export default () => createStore(reducers, applyMiddleware());