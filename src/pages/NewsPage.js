import React from 'react'
import news1 from '../images/news1.png'
import './NewsPage.css'

function NewsPage() {
  return (
    <div>
      <h2>Lorem Ipsum is simply dummy text</h2>
      <img src={news1} alt='News1' className='newsBig' />
      <p>20 de junho, 2023</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  )
}

export default NewsPage
