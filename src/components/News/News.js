import React from 'react';
import './News.css'
import { Link } from 'react-router-dom'

function News({ img, title, date, text }) {
  return (
    <div className="newsContainer">
      <img src={img} alt={img} className='newsImg' />
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{text}</p>
      <a href={`/news`}><p className='more'>Ler Mais...</p></a>
      <hr/>
    </div>
  );
}

export default News;