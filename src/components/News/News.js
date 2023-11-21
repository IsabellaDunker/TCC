import React from 'react';
import './News.css'
import Moment from 'react-moment';

function News({ id, img, title, date, text }) {
  return (
    <div className="newsContainer">
      <img src={img} alt="Imagem notícias" className='newsImg' />
      <h3>{title}</h3>
      <p><Moment format="DD [de] MMMM, YYYY">{date}</Moment></p>
      <LimitWords texto={text} limite={25}/>
      <a href={`/news/${id}`}><p className='more'>SAIBA MAIS</p></a>
      <hr/>
    </div>
  );
}

function LimitWords({ texto, limite }) {
  const words = texto.split(' ');

  if (words.length > limite) {
    const limitedText = words.slice(0, limite).join(' ');
    return (
      <p>
        {limitedText}...
      </p>
    );
  }

  return <div>{texto}</div>;
}

export default News;