import React from 'react';

const Header = ({ logoPath }) => {
  const navigationItems = [
    {
      name: 'Početna',
      url: '/home',
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
        <a href={item.url} className='link'>
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <header>
      <img src={logoPath} alt='logo' />
      <nav>
        <ul className='navbar'>{navItems}</ul>
        <i className='ri-search-2-line'></i>
      </nav>
    </header>
  );
};

export default Header;
