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

// for gh-pages, change to just / for localhosted instance
// "homepage": "http://{your github name}.github.io/{your repository name}"
// <Route path='/{your repository name}' exact component={Homepage}/>


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/github-resume" element={<App />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

