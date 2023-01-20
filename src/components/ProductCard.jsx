import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import i18n from '../asserts/i18';

import { ReactComponent as Border } from '../asserts/img/Border.svg';

import './ProductCard.css';

const ProductCard = (props) => {
  const { id } = props;

  const [selected, setSelected] = useState(false);

  const className = cn('cardBorder', {
    selected,
  });

  const priceClassName = cn('price', {
    'price-selected': selected,
  });

  return (
    <div className="wrapper">
      <textbox
        className="ProductCard"
        onClick={() => setSelected(!selected)}
        onMouseOut={() => setSelected(!selected)}
      >
        <Border className={className} />
        <div className="ProductCard_text">
          <h3>{i18n.t('productCards.title')}</h3>
          <h1>{i18n.t('productCards.name')}</h1>
          <h2>{i18n.t(`productCards.product${id}.ingredient`)}</h2>
          <h4>
            {i18n.t('servings.counter.count', { count: i18n.t(`productCards.product${id}.servingsPerPack`) })}
            <br />
            {i18n.t('mouses.counter.count', { count: i18n.t(`productCards.product${id}.gift`) })}
          </h4>
        </div>
        <div className={priceClassName}>
          <div>
            <h1>{i18n.t(`productCards.product${id}.weight`)}</h1>
            <h2>{i18n.t(`productCards.product${id}.unit`)}</h2>
          </div>
        </div>
      </textbox>
      <div className="buyText">
        {!selected && (
        <h3>
          {i18n.t(`productCards.product${id}.nonSelected`)}
          {' '}
          <textbox onClick={() => setSelected(!selected)}>{i18n.t(`productCards.product${id}.buyText`)}</textbox>
          .
        </h3>
        )}
        {selected && (
        <h3>{i18n.t(`productCards.product${id}.selected`)}</h3>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
