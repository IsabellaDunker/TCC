import React from 'react';
import FeatherIcon from 'feather-icons-react';
import './Footer.css'

function Footer() {
  return (
    <div className="footer-main">
      <div className='footer'>
        <div className='row'>
          <div className='col'>
            <ul>
              <li className='mainText'>Fale com o Unipam</li>
              <li className='number'>0800 940-4000</li>
            </ul>
          </div>

          <div className='col'>
            <ul>
              <li className='mainText'>Unipam nas redes</li>
              <a><FeatherIcon icon="facebook"/></a>
              <a><FeatherIcon icon="twitter"/></a>
              <a><FeatherIcon icon="linkedin"/></a>
            </ul>
          </div>

          <div className='col'>
            <ul>
              <li className='mainText'>Central de ajuda</li>
              <li className='secondText'>Ouvidoria</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;