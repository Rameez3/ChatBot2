import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="mt-5 bg-darkh h-100">
        <Carousel.Item>
            <h1>Jack Smith</h1>
            <Carousel.Caption>Best website eva!</Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;