import React, { useState } from 'react';
import './searchBar.css'

export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
    }

    return (
        <div className="searchbar">
            <form className="search-form" onSubmit={handleFormSubmit}>
                <input 
                    className="search-input" 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for a movie, actor or show..."/>
                <button 
                    type="submit"
                    className="search-button">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    )
}