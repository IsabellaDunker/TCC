import React, { useState, useEffect} from 'react'
import img from '../../images/unipam-banner.jpg'
import './Slider.css'

export default function Slider({ user }) {
  return (
    <div className='carousel-main'>
      {user ? (
        <h4>Olá {user.name}, seja bem vindo(a)!</h4>
      ) : (
        <p>Carregando...</p>
      )}
      <div className='carousel'>
        <div class="black-div">
          <h3>Você está na área do Portal do Colaborador.</h3>
        </div>
        <div class="image-div">
          <img src={img} alt="Imagem"/>
        </div>
        </div>
    </div>
  )
}
