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
  const [form, setForm] = useState(clearForm);
  console.log("stateform  before", form);
  
  const [lists, setLists] = useState([]);
  const [arrayForms, setArrayForms] = useState(forms);
  console.log("stateform  before", arrayForms);
  /*const handleNameChange = evt => {
    setForm(prevForm => ({...prevForm, date: evt.target.value}));
    }
*/
  const handleChange = (evt) => {
      const value = evt.target.value;
      const name = evt.target.name;
      setForm(prevForm => ({...prevForm, [name]: value, name: name}));
      console.log("stateform  new", form);
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log('tip', evt.type);
    console.log('target', evt.target);

    setForm(prevForm => ({...prevForm, button: 'OK'}));
    console.log("stateform  new", form);

    forms.push(form);
    setArrayForms(forms);
    console.log("!!! arrayForms\n", arrayForms);
    formIndex = arrayForms.map((form) =>({id: shortid.generate(), value: form }));
    //formIndex = forms.map((form) =>({id: shortid.generate(), value: form }));
    //list = formIndex.map((formelement) =><li key={formelement.id}>{<TableItem form={formelement.value} delete={handleDelete}/>}</li>);
    list = formIndex.map(formelement => <li key={formelement.id}>
      {<TableItem form={formelement.value} id={formelement.id} delete={() => handleDelete(evt, formelement.id)}/>}</li>);
    // setLists([...list]);// setLists(prevLists => ([...prevLists, list]));//setLists(prevLists => [...list]);

    setLists(() => [...list]);
    console.log("arrayform  по нажатии", forms, formIndex, list, lists);
    setForm(clearForm);
  }

  const handleDelete = (evt, id)=> {
    console.log("delete   id\n", id, evt);
    list = formIndex.filter(item=>item.id!==id);

    // найти и удалить форму в forms? по id из formindex
    const element = formIndex.find(item=>item.id===id);
    console.log("delete  element forms\n", element, element.value);
    let forms2 = [];
    forms2 = forms.filter((form)=> form!==element.value);
    forms = forms2;
    
    console.log("после delete  forms\n", forms);
    //setArrayForms(() => [...forms]);
    setArrayForms(forms);
    console.log("after delete forms arrayForms\n", arrayForms);
    // и для formindex
    let formIndex1 = [];
    formIndex1 = formIndex.filter((form)=> form!==element);
    formIndex = formIndex1;

    setForm(clearForm);
    setLists(() => [...list]);
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
      <ul className='border_ul'>{lists}
      </ul>
    </div>

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