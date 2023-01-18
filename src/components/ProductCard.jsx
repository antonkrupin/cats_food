import React from 'react';

import { ReactComponent as Border } from '../asserts/img/Border.svg';

import './ProductCard.css';

const ProductCard = () => (
  <span className="ProductCard">
    <Border className="cardBorder hover" />
    <img src="" alt="" />
    <h3>test</h3>
  </span>
);

export default ProductCard;
