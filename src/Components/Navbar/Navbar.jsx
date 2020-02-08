import React from 'react';
import { Nav, NavItem, NavLink } from "shards-react";
import './navbar.css';

import SearchBar from '../Search-Bar/SearchBar';

export default function NavExample(props) {
  return (
    <Nav className="navbar">
      <NavItem>
        <NavLink href="#">
          React Movies
        </NavLink>
      </NavItem>
      <NavItem>
        <SearchBar handleMovieSearch={props.handleMovieSearch}/>
      </NavItem>
    </Nav>
  );
}