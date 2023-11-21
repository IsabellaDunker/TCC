import React, { useState, useEffect } from 'react'
import news1 from '../../images/news1.png'
import news2 from '../../images/news2.jpg'
import imgOb from '../../images/imagem_observatorio.webp'
import news3 from '../../images/news3.jpg'
import News from './News'
import 'moment/locale/pt-br';
import '../../Home.css'
import FeatherIcon from 'feather-icons-react';
import { index } from '../../database.js'

function NewsContainer({ user }) {
  const [data, setData] = useState(null);
  const [visibleComponents, setVisibleComponents] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  let paragraphs;

  useEffect(() =>{
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await index('news');
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    };

    fetchData();
  }, [])
  const totalPages = data ? Math.ceil(data.length / 2) : 0;

  const showPage = (pageNumber) => {
    if (data) {
      const newIndex = (pageNumber - 1) * 2;
      setVisibleComponents(newIndex + 2);
      setCurrentPage(pageNumber);
    }
  };

  const showMoreComponents = () => {
    if (data && currentPage < totalPages) {
      const nextPage = currentPage + 1;
      showPage(nextPage);
    }
  };
  const showLessComponents = () => {
    if (data && currentPage > 1) {
      const prevPage = currentPage - 1;
      showPage(prevPage);
    }
  };

  return (
      <div>
        <h2>Quadro de notícias</h2>
        <hr/>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {data !== null && (
          <div>
          {data.slice((currentPage - 1) * 2, visibleComponents).map((item) => (
              <News 
              key={item.id}
                id={item.id}
                img={item.id === 1 ? news1 : item.id === 2 ? imgOb : item.id === 3 ? news3 : news2}
                title={item.title}
                date={item.date}
                text={item.content}
              />
            ))}
          {totalPages > 1 && (
            <div className='next-page-container'>
              <button className='button-next-page' onClick={showLessComponents}><FeatherIcon className='icon-next-page' icon="chevron-left" /></button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button className='button-next-page' key={i + 1} onClick={() => showPage(i + 1)}>
                  <p className='p-next-page'>{i + 1}</p>
                </button>
              ))}
              <button className='button-next-page' onClick={showMoreComponents}><FeatherIcon className='icon-next-page' icon="chevron-right" /></button>
            </div>  
          )}
          </div>  
          )}
          </div>  
        )}
      </div>
  )
}

export default NewsContainer
