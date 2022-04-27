import React from 'react'

export default function TableItem(props) {
  const {name, way, date} = props.form;
  console.log('prop ---', props.form, '\n name--', name);
  
  return (
    <>
    <div className="card_list">
      <div className='card_item'>
        <div className="card_description">{date}</div>
        <div className="card_price">{way}</div>
          <button className="button2">&#9998;</button>
          <button className="button2">&#10008;</button>
      </div>
    </div>
    </>
  )
}