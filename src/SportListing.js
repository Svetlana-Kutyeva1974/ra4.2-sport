import React, { useState } from 'react';
import TableItem from './TableItem';
import shortid from 'shortid';
//import PropTypes from 'prop-types'
// import ListItem from './ListItem';
let forms =[];
let list =[];
let formIndex =[];

export default function SportListing(props) {
  //const {items} = props;
  // console.log("перед отрисовкой", items);

  /*let forms =[];
  let list =[];
  let formIndex =[];
  */

 // let todoItems =[];
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
    formIndex = forms.map((form) =>({id: shortid.generate(), value: form }));
    list = formIndex.map((formelement) =><li key={formelement.id}>{<TableItem form={formelement.value}/>}</li>);
    //todoItems = forms.map((item) => {<TableItem form={item}/>});
    console.log("arrayform  по нажатии", forms, formIndex, list);
    //console.log("array todoItem\n", todoItems);
    }
  

  return (
    <>
    <form className='form_flex' onSubmit={handleSubmit}>
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
        <span className='span_button'>кнопка</span>
        <button className='button' type="submit">OK</button>
        </div>
      </div>
      <div>
      <h3 className="card_title">
        <span className='span_title'>Дата (ДД.ММ.ГГ</span>
        <span className='span_title'>Пройдено км</span>
        <span className='span_title'>Действия</span>
      </h3>
      <ul>{list}
      </ul>
    </div>
      
     

    </form>
    </>
    //  {form.button==='OK' && <TableItem form={form}/>}

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