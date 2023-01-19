import React from 'react';
import i18n from './asserts/i18';

import ProductCard from './components/ProductCard';

import './App.css';

const App = () => {
  const test = [1, 2, 3];
  return (
    <div className="App">
      <h1 className="title">{i18n.t('pageTitle')}</h1>
      <div className="ProductCards">
        {test.map((elem) => (
          <ProductCard id={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
