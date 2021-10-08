import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Man from '../src/compents/man';
import Women from '../src/compents/women';
import modal from '../src/routers/modal';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Router>  
    <Route path="/" component={App} />
    <Route path="/man" component={Man} />
    <Route path="/women" component={Women} />
    <Route path="/modal" component={modal} />
    
  </Router>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
