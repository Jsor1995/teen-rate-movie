import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';

const HomePage = () => {
  return (     
    <div>
      <Helmet>
        <title>Cringecast - Home</title>
      </Helmet>
      <div>
          <Home />
      </div>
    </div>
  )
};


const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>Cringecast - About</title>
      </Helmet>

      <Navbar />
      <div>
          Abouts
      </div>
    </div>
  )
};

const MoviePage = () => {
  return (    
    <div>
      <Helmet>
        <title>Cringecast - m</title>
      </Helmet>

      <Navbar />
      <div>
          <Movie />
      </div>
    </div>
  )
};

export { HomePage, AboutPage, MoviePage } ;