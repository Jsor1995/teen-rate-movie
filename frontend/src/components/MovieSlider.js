import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SliderMovie extends Component {
  state = {
    poster : null,
    title : null,
    overview : null,
  }
  componentDidMount(){
    let id = this.props.id;
    axios.get('/movie/' + id)
      .then(res=>{
        this.setState({
          title : res.data.title,
          poster : res.data.poster,
          overview : res.data.overview,
          id : id
        })
      })
      .catch(err=>console.log(err))
  }

  render() {
    let url = "/show_movie/" + this.state.id;
    return (
      <li>
        <Link to={ url }>
          <img src={ this.state.poster } />
          <h3> { this.state.title } </h3>
          <p> { this.state.overview } </p>
        </Link>
      </li>
    )
  }
}


class MovieSlider extends Component {

  render() {
    let movies = this.props.movies; // should be in a state
    return (
      <div class="slider row">
        <h2>{ this.props.title }: </h2>
        <ul class="movie-slider">
          { movies.map(movie => (
            <SliderMovie id={movie}/>
          ))}
        </ul>
      </div>

  )}

};

export default MovieSlider;