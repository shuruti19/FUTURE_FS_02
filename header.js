import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header" aria-label="Main Navigation">
      <h1 className="header-title">Weather Dashboard</h1>
      <nav className="header-nav" aria-label="Header Navigation Links">
        <a href="#" className="header-link">Home</a>
        <a href="#" className="header-link">About</a>
        <a href="#" className="header-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;