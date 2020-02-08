import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import { searchMovie } from './api';

import Navbar from './Components/Navbar/Navbar';

class App extends React.Component {

  hanldeMovieSearch = (movieName) => {
    searchMovie(movieName)
      .then(res => {
        console.log(res.data)
      })
  }

  render() {
    return (
      <Navbar handleMovieSearch={this.hanldeMovieSearch} />
    );
  }
}

export default App;
