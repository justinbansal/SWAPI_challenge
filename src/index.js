import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Linkto} from 'react-router';
import './index.css';
import App from './App';
import Main from './Main';
import categoryDetails from './categoryDetails';

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Main} />
        <Route path="main" component={Main} />
        <Route path="details/:category/:id" component={categoryDetails} />
      </Route>
  </Router>
),document.getElementById('root'));
