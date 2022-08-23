import React from 'react';

const Header = ({ navigationItems, logoPath }) => {
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
      </nav>
    </header>
  );
};

export default Header;
