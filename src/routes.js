import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import AddReviewPage from './containers/AddReviewPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>   
    <Route path="about" component={AboutPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="add-review" component={AddReviewPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
