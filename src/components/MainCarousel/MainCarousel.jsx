import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import PlaceHolderImage from '../../img/tree.png';

function MainCarousel(props) {
  return ( 
    <Carousel>
      <Carousel.Item>
        <img width={450} height={250} alt="900x500" src={PlaceHolderImage} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={450} height={250} alt="900x500" src={PlaceHolderImage} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={450} height={250} alt="900x500" src={PlaceHolderImage} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
