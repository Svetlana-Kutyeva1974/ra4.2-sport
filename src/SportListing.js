import React, { useState } from 'react';
import TableItem from './TableItem';
//import PropTypes from 'prop-types'
// import ListItem from './ListItem';

export default function SportListing(props) {
  //const {items} = props;
  // console.log("перед отрисовкой", items);
  let forms =[];
  const [form, setForm] = useState({
    name: '',
    date: '',
    way: '',
    button: ''
    });
    console.log("stateform  before", form);
  /*const handleNameChange = evt => {
    setForm(prevForm => ({...prevForm, date: evt.target.value}));
    }
*/
  const handleChange = (evt) => {
     // const name = target.name;
     console.log("stateform  before set", form);
      const value = evt.target.value;
      const name = evt.target.name;
      setForm(prevForm => ({...prevForm, [name]: value, name: name}));
      console.log("stateform  new", form);
    }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('tip', evt.type);
    console.log('target', evt.target, evt.currentTarget);
    setForm(prevForm => ({...prevForm, button: 'OK'}));
    console.log("stateform  new", form);
    forms.push(form);
    console.log("arrayform  new", forms);
    }
  
   
  const todoItems = forms.map((item) => <li>{<TableItem form={item}/>}</li>);
  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='body_form'>
        <div className='input_form'>
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input id="date" name="date" value={form.date} onChange={handleChange} />
        </div>
        <div className='input_form'>
          <label htmlFor="way">Пройдено км</label>
          <input id="way" name="way" value={form.way} onChange={handleChange} />
        </div>
        <div className='input_form'>
        <span>кнопка</span>
        <button type="submit">OK</button>
        </div>
      </div>
    </form>
    {form.button==='OK' && <TableItem form={form}/>}
    
    <div>
      <h2>Список дел:</h2>
      <ul>{todoItems}
      </ul>
    </div>

    </>
    /*<div className='item-list'>
      {items.map((item) => {
        return <ListItem item={item} key={item.listing_id} /> 
      })}
    </div>
    */
  );
}
/*
Listing.defaultProps = {
  items: []
}

Listing.propTypes = {
  items: PropTypes.array.isRequired
}
*/