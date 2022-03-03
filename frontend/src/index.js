import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import './css/index.css';
import './css/normalize.css';

import { HomePage, AboutPage, MoviePage } from './App'; 


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<AboutPage />} />
        <Route exact path='/movie/:movieID' element={<MoviePage />} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

