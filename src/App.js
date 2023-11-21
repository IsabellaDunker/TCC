import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Calendar from'./components/Calendar/Calendar';
import NewsContainer from './components/News/NewsContainer';
import Slider from './components/Carousel/Slider';
import './Home.css';
import { getEvent } from './database';

function App() {
  const [item, setItem] = useState(null);
  const itemId = 1;

  useEffect(() => {
    async function fetchItem() {
      try {
        const data = await getEvent('user', itemId);
        setItem(data);
      } catch (error) {
        console.error('Erro ao buscar item por ID:', error);
      }
    }

    fetchItem();
  }, ['user', itemId]);

  return (
    <div className="App">
      <Header/>
      <Slider user={item}/>
      <div className='container'>
        { item ? (
          <div className='containerChild'>
          <div className='child1'>
           <NewsContainer user={item}/>
          </div>
          <div className='child2'>
            <h2>Calendário</h2>
            <Calendar user={item}/>
          </div>
        </div>
        ) : (
          <div/>
        )}
      </div>
      <hr/>
      <Footer/>   
    </div>
  );
}

export default App;
