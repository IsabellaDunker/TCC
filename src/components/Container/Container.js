import React from 'react';
import './Container.css'
import { Mail } from 'react-feather';

function Container() {
  return (
    <div className="container">
        <ul>
          <li>
            <Mail className='mail'/>
          </li>
          <li>
            <p>Quadro de avisos</p>
          </li>
        </ul>
        <button className='acess'>Acessar</button>
    </div>
  );
}

export default Container;