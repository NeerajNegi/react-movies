import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import { getMovie } from './api';

import Navbar from './Components/Navbar';

function App() {

  useEffect(() => {
    getMovie(500).then(response => console.log(response.data));
  });

  return (
    <Navbar/>
  );
}

export default App;
