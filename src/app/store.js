import { createStore } from 'redux';

import reducer from './reducers/categories';

export default () => createStore(reducer);