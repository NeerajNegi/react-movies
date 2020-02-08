import React from 'react';
import './searchBar.css'

export default function SearchBar() {
    return (
        <div className="searchbar">
            <input className="search-input" type="text" placeholder="Search for a movie, actor or show..."/>
            <button className="search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
    )
}