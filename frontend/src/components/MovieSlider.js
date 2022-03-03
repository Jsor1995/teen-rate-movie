import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SliderMovie extends Component {
  render() {
    let summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque egestas diam in arcu. Et ligula ullamcorper malesuada proin libero. Eget lorem dolor sed viverra ipsum. Feugiat in ante metus dictum at. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Nullam vehicula ipsum a arcu. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nunc lobortis mattis aliquam faucibus. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Neque volutpat ac tincidunt vitae semper quis. Sollicitudin aliquam ultrices sagittis orci a. Venenatis urna cursus eget nunc scelerisque. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Sed euismod nisi porta lorem mollis aliquam ut. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Quisque id diam vel quam elementum pulvinar etiam non quam. Hendrerit gravida rutrum quisque non tellus orci ac."; 
    return (
      <li>
        <a href="#">
          <img src={require("../images/arbol.png")} alt="logo"/>
          <h3> { this.props.name } </h3>
          <p> { summary } </p>
        </a>
      </li>
    )
  }
}


class MovieSlider extends Component {
  render() {
    let movies = [1, 2, 3, 5, 6];
    return (
      <div class="slider row">
        <h2>{ this.props.title }: </h2>
        <ul class="movie-slider">
          { movies.map(movie => (
            <SliderMovie name={movie}/>
          ))}
        </ul>
      </div>

  )}

};

export default MovieSlider;