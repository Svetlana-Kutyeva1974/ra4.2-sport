import React, { useState } from 'react';
import TableItem from './TableItem';
import shortid from 'shortid';
//import PropTypes from 'prop-types'

let forms =[];
let list =[];
let formIndex =[];
const clearForm = {
  name: '',
  date: '',
  way: '',
  button: ''
}

export default function SportListing() {
  const [form, setForm] = useState(clearForm);//данные формы
  console.log("stateform  before", form);
  
  const [lists, setLists] = useState([]); //список сохраненных форм по нажатии ок с ключами сгенерир

  const handleChange = (evt) => {
      const value = evt.target.value;
      const name = evt.target.name;
      setForm(prevForm => ({...prevForm, [name]: value, name: name}));
      console.log("stateform  new in change", form);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    //console.log('tip', evt.type);
    //console.log('target', evt.target, evt.target.name, evt.target.value);
    setForm(prevForm => ({...prevForm, form}));
    console.log("stateform  new in submit ok", form);

    forms.push(form);
    formIndex = forms.map((form) =>({id: shortid.generate(), value: form }));
    list = formIndex.map(formelement =>
      <li key={formelement.id}>
        {<TableItem form={formelement.value} id={formelement.id} delete={() => handleDelete(formelement.id)}/>}
      </li>);

    setLists(list);
    console.log("arrayform  по нажатии ok", forms, formIndex, list, lists);
    setForm(clearForm);
  }

  const handleDelete = (id)=> {
    console.log("delete   id\n", id);
    list = formIndex.filter(item=>item.id!==id);

    // найти и удалить форму в forms? по id из formindex
    const element = formIndex.find(item=>item.id===id);
    console.log("delete  element forms\n", element, element.value);
    let forms2 = [];
    forms2 = forms.filter((form)=> form!==element.value);
    forms = forms2;
    console.log("после delete  forms\n", forms);
    let formIndex1 = [];
    formIndex1 = formIndex.filter((form)=> form!==element);
    formIndex = formIndex1;

    setForm(clearForm);
    setLists(list);
    console.log("после delete  cpisok\n", list, lists);
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
      
    </form>
    <div className='list_sport'>
      <h3 className="card_title">
        <span className='span_title'>Дата (ДД.ММ.ГГ)</span>
        <span className='span_title'>Пройдено км</span>
        <span className='span_title'>Действия</span>
      </h3>
      <ul className='border_ul'>
        {lists}
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