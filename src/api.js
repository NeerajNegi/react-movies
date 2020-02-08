import axios from 'axios';

console.log(process.env.REACT_APP_ENDPOINT);

const requestHandler = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT
})

const getMovie = (movieId) => {
    return requestHandler.get(`/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
}

export {
    getMovie
};