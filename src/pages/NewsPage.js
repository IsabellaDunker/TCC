import React, { useState, useEffect } from 'react'
import './NewsPage.css'
import FeatherIcon from 'feather-icons-react';
import news1 from '../images/news1.png'
import news2 from '../images/news2.jpg'
import imgOb from '../images/imagem_observatorio.webp'
import news3 from '../images/news3.jpg'
import { index, getEvent } from '../database'
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'

function NewsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const itemId = id;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paragraphs, setParagraph] = useState(null)

  useEffect(() => {
    async function fetchItem() {
      try {
        const data = await getEvent('news', itemId);
        console.log(data)
        setItem(data);
        setParagraph(data.content.split('\n'));
      } catch (error) {
        console.error('Erro ao buscar item por ID:', error);
      }
    }

    fetchItem();
  }, [itemId]);

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

  return (
    <div className='news-page'>
      <Header/>
      <hr className='hr1'/>
      <div className='news-container'>
      <div className='news-article'>
      {item ? (
        <div>
          {paragraphs ? ( <div>
          <h2>{item.title}</h2>
          <FeatherIcon className='news-date' icon="calendar"></FeatherIcon>
          <p className='news-date'><Moment format="DD/MM/YYYY HH:mm">{item.date}</Moment></p>
          <img src={item.id === 1 ? news1 : item.id === 2 ? imgOb : item.id === 3 ? news3 : news2} alt='News1' className='newsBig' />
          <p className=''></p>
          <div className='news-content'>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className='news-content-p'>{paragraph}</p>
          ))} 
          </div>
        </div>) : (<p></p>)}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
      </div>
      <div className='sidebar'>
        <h2>Notícias recentes</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {data !== null && (
          <div>
          {data.map((item) => (
                <div>
                <img src={item.id === 1 ? news1 : item.id === 2 ? imgOb : item.id === 3 ? news3 : news2} alt="Imagem notícias" className='sidebarImg' />
                <a  href={`/news/${id}`}>{item.title}</a>
                <p><Moment format="DD/MM/YY">{item.date}</Moment></p>
              </div>
          ))}
          </div>  
          )}
          </div>  
        )}
      </div>
      </div>
      <hr/>
      <Footer/>
    </div>
  )
}

export default NewsPage
