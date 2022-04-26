import React from 'react';
import ShopCard from './ShopCard';

export default function CardView(props) {
  const {cards} = props;
  console.log('prop cards---', cards);
  return (
    <div className='cards'>
      {cards.map((card, index) => {
        return <ShopCard card={card} key={index} /> 
      })}
    </div>
  );
}