import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './header';
import Dashboard from './dashboard';
import Home from './home';
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
              <Header />
              <Route exact path="/dashboard" component={Dashboard} classy="dashboard"/>
              <Route exact path="/" component={Home} />
            </main>
          </BrowserRouter>
        </React.Fragment>
      </Provider>
      
    );
  }
}