import React from 'react';
import i18n from './asserts/i18';

import ProductCard from './components/ProductCard';

import './App.css';

const App = () => (
  <div className="App">
    <h1 className="title">{i18n.t('pageTitle')}</h1>
    <div className="ProductCards">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
);

export default App;
