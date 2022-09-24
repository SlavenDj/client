import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ logoPath }) => {
  const navigationItems = [
    {
      name: 'Početna',
      url: '/',
    },
    {
      name: 'O nama',
      url: '/about',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Projekti',
      url: '/projects',
    },
    {
      name: 'Kontakt',
      url: '/contact',
    },
  ];

  const navItems = navigationItems.map((item, index) => {
    return (
      <li key={index}>
        <Link to={item.url} className='link'>
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <header>
      <i className='ri-menu-3-line hiddenMenu'></i>
      <img src={logoPath} alt='logo' />
      <nav>
        <ul className='navbar'>{navItems}</ul>
        <i className='ri-search-2-line icon_hover_effect'></i>
      </nav>
      <i className='ri-menu-3-line menu-icon'></i>
    </header>
  );
};

export default Header;
