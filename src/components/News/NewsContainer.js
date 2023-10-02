import React from 'react'
import news1 from '../../images/news1.png'
import news2 from '../../images/news2.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import News from './News'
import '../../Home.css'

function NewsContainer() {
  return (
    <div className='containerChild'>
        <div className='child1'>
        <h2>Quadro de notícias</h2>
        <hr/>
        <News 
            img={news1}
            title='Lorem Ipsum is simply dummy text'
            date="20 de junho, 2023"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <News
            img={news2}
            title='Lorem Ipsum is simply dummy text'
            date="20 de junho, 2023"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <p className='sequence'>1, 2, 3 ... 6</p>
        </div>
    </div>
  )
}

export default NewsContainer
