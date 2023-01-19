import React from 'react';

import { ReactComponent as Border } from '../asserts/img/Border.svg';

import './ProductCard.css';

const ProductCard = () => (
  <div className="ProductCard">
    <Border className="cardBorder hover" />
    <div className="ProductCard_text">
      <h3>Сказочное заморское яство</h3>
      <h1>Нямушка</h1>
      <h2>с рыбой</h2>
      <h4>
        40 порций
        <br />
        2 мыши в подарок
      </h4>
      {/* <img src="../asserts/img/cat.png" alt="Довольный кот" /> */}
    </div>
    <div className="price">
      <div>
        <h1>0,2</h1>
        <h2>кг</h2>
      </div>
    </div>
  </div>
);

export default ProductCard;
