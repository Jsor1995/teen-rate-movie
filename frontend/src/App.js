import React from 'react';

import Home from './pages/Home';
import Movie from './pages/Movie';

const HomePage = () => {
  return (
    <div>
        <Home />
    </div>
  )
};


const AboutPage = () => {
  return (
    <div>
      <p>About this</p>
    </div>
  )
};

const MoviePage = () => {
  return (
    <div>
        <Movie />
    </div>
  )
};

export { HomePage, AboutPage, MoviePage } ;