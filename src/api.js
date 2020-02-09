import axios from 'axios';

const requestHandler = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT
})

const searchMovie = (movieName) => {
    return requestHandler.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${encodeURIComponent(movieName)}`);
}

export {
    searchMovie
}