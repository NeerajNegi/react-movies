import React from 'react';
import { Container } from "shards-react";
import './searchResults.css';

import MovieItem from '../Movie-Item/MovieItem';

export default function SearchResults(props) {

    let searchResultsList = props.searchResults.map((result) => {
        return (
            <MovieItem key={result.id} movie={result}/>
        )
    })

    return(
        <Container>
            {searchResultsList}
        </Container>
    )
}