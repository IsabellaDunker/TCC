import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Calendar from'./components/Calendar/Calendar'
import NewsContainer from './components/News/NewsContainer'
import Carousel from './components/Carousel/Carousel';
import './Home.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <div className='container'>
        <NewsContainer/>
        <div className='containerChild'>
          <div className='child2'>
            <h2>Calendário</h2>
            <Calendar/>
          </div>
        </div>
      </div>
      <hr/>
      <Footer/>   
    </div>
  );
}

export default App;
