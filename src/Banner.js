import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import banner0 from '../imagens/banner.jpg';
import banner1 from '../imagens/Banner-01.jpg';
import banner2 from '../imagens/banho-e-tosa.png'

function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img src={banner0} className="carousel-img" alt="Banner 1" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={banner1} className="carousel-img" alt="Banner 2" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={banner2} className="carousel-img" alt="Banner 3" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

