import React from 'react';
import Navbar from '../components/Navbar';
import MovieSlider from '../components/MovieSlider';
  
const Home = () => {
  return (
    <div id="homepage">
      <div class="row row-center" id="logo-header">
        <h1>Cringecast</h1>
      </div>
      <Navbar />
      <MovieSlider title="Trending" />
      <MovieSlider title="New" />

    </div>



  );
};
  
export default Home;