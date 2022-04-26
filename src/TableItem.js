import React from 'react'

export default function TableItem(props) {
  const {name, way, date} = props.form;
  //const {item} = props;
  console.log('prop ---', props.form, '\n name--', name);
  

  return (
    <div className="card_list">
      <h3 className="card_title">{name}</h3>
      <div className="card_description">{way}</div>
      <div className="card_price">${date}</div>
      <div className='card_button'>
        <button className="button2">ADD TO CART</button>
      </div>
    </div>
  )
}