import React from 'react';
import logo from '../../images/logo.png'
import avatar from '../../images/avatar.png'
import FeatherIcon from 'feather-icons-react';
import './Header.css'

function Header() {
  return (
    <div className="header">
      <button><FeatherIcon icon="menu" className='menu'/></button>
      <img src={logo} alt="Logo" className='logo' />
      <img src={avatar} alt="Avatar" className='avatar' />
    </div>
  );
}

export default Header;