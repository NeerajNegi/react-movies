import React from 'react';
import { Row, Col } from "shards-react";

import './movieItem.css';

export default function MovieItem(props) {
    return(
        <Row className="movie-list-item">
            <Col lg="3" md="3" sm="12">
                <img className="movie-poster" src={`${process.env.REACT_APP_IMAGE_ENDPOINT}/${props.movie.poster_path}`} alt=""/>
            </Col>
            <Col lg="9" md="9" sm="12">
                <Row>
                    <Col><h4>{props.movie.title}</h4></Col>
                    <Col><p>{props.movie.overview}</p></Col>
                </Row>
            </Col>
        </Row>
    )
}