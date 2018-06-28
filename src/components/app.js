import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard';

import createStore from '../app/store.js';

const store = createStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.subscribe(() => console.log('__STORE__', store.getState()));
  }

  render() {
    return(
      <Provider store={store}>
        <React.Fragment>
          <BrowserRouter>
            <main>
              <Route path="/dashboard" component={Dashboard} />
            </main>
          </BrowserRouter>
        </React.Fragment>
      </Provider>
      
    );
  }
}