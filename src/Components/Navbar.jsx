import React from 'react';
import { Nav, NavItem, NavLink } from "shards-react";
import './navbar.css';

import SearchBar from './SearchBar';

export default function NavExample() {
  return (
    <Nav className="navbar">
      <NavItem>
        <NavLink href="#">
          React Movies
        </NavLink>
      </NavItem>
      <NavItem>
        <SearchBar/>
      </NavItem>
    </Nav>
  );
}