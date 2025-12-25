import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const location = useLocation();

  return (
    <header className='header'>
      <Link to='/' className='logo-link'>
        <img src='/social circle Logo.png' alt='Logo' className='logo-img' />
        <h1 className='logo'>Social Circle</h1>
      </Link>
      <nav className='header-nav'>
        <Link
          to='/'
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to='/founders'
          className={`nav-link ${
            location.pathname === '/founders' ? 'active' : ''
          }`}
        >
          Founders
        </Link>
        <a href="/support.html" className={`nav-link`}>
          Support
        </a>
      </nav>
    </header>
  );
}
