import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import { searchMovie } from './api';

import Navbar from './Components/Navbar/Navbar';
import SearchResults from './Components/Search-Results/SearchResults';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      searchResults: []
    }
  }

  hanldeMovieSearch = (movieName) => {
    searchMovie(movieName)
      .then(res => {
        this.setState({searchResults: res.data.results})
      })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar handleMovieSearch={this.hanldeMovieSearch} />
        <SearchResults searchResults={this.state.searchResults}/>
      </React.Fragment>
    );
  }
}

export default App;
