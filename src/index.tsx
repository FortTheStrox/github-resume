import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './css/main.min.css';
import App from './components/App';

// add between version and private for deploy 
// "homepage": "https://fortthestrox.github.io/github-resume",

// for gh-pages, change to just / for localhosted instance https://dev.to/janjibdev/problem-with-react-router-app-and-github-pages-lij
// "homepage": "http://{your github name}.github.io/{your repository name}"
// <Route path='/{your repository name}' exact component={Homepage}/>


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

