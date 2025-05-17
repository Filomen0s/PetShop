import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner02 from '../imagens/Banner01.jpg'
import Banner01 from '../imagens/banner.jpg'
import Banner03 from '../imagens/banhoETosa.png'

function Banner() {
  return (
<Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img className='bannerUm' src={Banner02} alt='Banner 02'/>
      </Carousel.Item>

      <Carousel.Item>
      <img className='bannerDois'  src={Banner01} alt='Banner 01'/>
      </Carousel.Item>

      <Carousel.Item>
      <img className='bannerTres'  src={Banner03} alt='Banner 03'/>
      </Carousel.Item>
      
    </Carousel>
  )
}

export default Banner
