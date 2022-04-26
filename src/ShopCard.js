import React from 'react'

export default function ShopCard(props) {
  const {name, color, img, price} = props.card;
  const {card} = props;
  console.log('prop card---', card);
  return (
    <div className='card'>
      <header className='card_header'>
        <h3 className='card_title'>{name}</h3>
        <div className='card_description'>{color}</div>
      </header>
      <div className='card_image'>
        <img src={img} alt={name}></img>
      </div>
      <footer className='card_footer'>
        <span className='card_price'>${price}</span>
        <button className='button2'>ADD TO CART</button>
      </footer>
    </div>
  )
}