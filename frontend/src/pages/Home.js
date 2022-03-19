import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import MovieSlider from '../components/MovieSlider';
  
class Home extends Component {
  state = {
    trendingMovies : [1, 2, 3, 4, 5, 6, 7],
    newMovies : [1, 2, 3, 4, 5, 6, 7]
  }

  componentDidMount(){
    // load trendingMovies and newMovies
  }

  render() {
    return (
      <div id="homepage">
        <div class="row row-center" id="logo-header">
          <h1>Cringecast</h1>
        </div>
        <Navbar />
        <MovieSlider title="Trending" movies={ this.state.trendingMovies }/>
        <MovieSlider title="New" movies={ this.state.newMovies }/>

      </div>

    );
  }
};
  
export default Home;