import React, { Component } from 'react';
import axios from 'axios';


class Movie extends Component {
  state = {
    poster : null,
    title : null,
    overview : null,
  }

  wertizoo() {
    console.log("Wertizoo....?");
    console.log(this.props);
    console.log(this.state);
  }

  changeTitleDebug() {
    this.setState({
      title: "Donkeys"
    });
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

  sendMovieRating() {
    axios.post('/place_to_post_move', {
      param1: 'data1',
      param2: 'data2'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div>
        <h1>{ this.state.title }</h1>
        <img src={ this.state.poster } />
        <p>{ this.state.overview } </p>
        <button onClick={ () => this.changeTitleDebug() }>update the title</button>
        <button onClick={ () => this.wertizoo() }>print the state</button>
      </div>
    )
  }


}
  
export default Movie;