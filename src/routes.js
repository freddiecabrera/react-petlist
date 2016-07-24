import React from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from 'store'
import Main from 'components/Main';
import Welcome from 'components/Welcome';
import Search from 'containers/Search';

const routes = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Welcome} />
        <Route path='/search' component={Search} />
      </Route>
    </Router>
  </Provider>
);

export default routes
