import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import i18n from '../asserts/i18';

import { ReactComponent as Border } from '../asserts/img/Border.svg';

import './ProductCard.css';

const ProductCard = (props) => {
  /* const {
    disabled, hovered, selected, id,
  } = props;

  const className = cn('cardBorder', {
    disabled,
    hovered,
    selected,
  });

  const priceClassName = cn('price', {
    'price-disabled': disabled,
    'price-hovered': hovered,
    'price-selected': selected,
  }); */

  const { id } = props;

  const [selected, setSelected] = useState(false);

  const className = cn('cardBorder', {
    selected,
  });

  const priceClassName = cn('price', {
    'price-selected': selected,
  });

  return (
    <textbox
      className="ProductCard"
      onClick={() => setSelected(!selected)}
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
        {/* <img src="../asserts/img/cat.png" alt="Довольный кот" /> */}
      </div>
      <div className={priceClassName}>
        <div>
          <h1>{i18n.t(`productCards.product${id}.weight`)}</h1>
          <h2>{i18n.t(`productCards.product${id}.unit`)}</h2>
        </div>
      </div>
    </textbox>
  );
};

export default ProductCard;
