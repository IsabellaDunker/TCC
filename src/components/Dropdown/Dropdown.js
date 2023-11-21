import React, { useState, useEffect, useRef } from 'react'
import FeatherIcon from 'feather-icons-react';
import './Dropdown.css'

export default function Dropdown({ id }) {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <button className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <FeatherIcon icon="menu" className='menu'/>
        </button>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <DropdownItem link={'/'} text = {"Início"}/>
            <DropdownItem link={`/news/${id}`} text = {"Notícias"}/>
            <DropdownItem link={'/news/'} text = {"Calendário"}/>
          </ul>
              
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <a href={props.link}> {props.text} </a>
    </li>
  );
}
