import React, {useState,useEffect,useRef} from 'react';
import logo from '../../images/logo.png'
import avatar from '../../images/avatar.png'
import './Header.css'
import Dropdown from '../Dropdown/Dropdown';
import { getEvent } from '../../database';
import news1 from '../../images/news1.png'
import imgOb from '../../images/imagem_observatorio.webp'

export default function Header() {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);
  const itemId = 1;

  let menuRefi = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRefi.current.contains(e.target)){
        setOpen(false);
        console.log(menuRefi.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  useEffect(() => {
    async function fetchItem() {
      try {
        const data = await getEvent('news', itemId);
        setItem(data);
      } catch (error) {
        console.error('Erro ao buscar item por ID:', error);
      }
    }

    fetchItem();
  }, [itemId]);

  return (
    <div className="header">
      { item && (
        <Dropdown
        id={itemId}
        img={itemId % 2 === 0 ? imgOb : news1}
        title={item.title}
        date={item.date}
        text={item.content} 
        />
      )}
      <img src={logo} alt="Logo" className='logo' />
      <div className='container-menu' ref={menuRefi}>
        <button className='trigger-menu' onClick={()=>{setOpen(!open)}}>
          <img src={avatar} alt="Avatar" className='avatar' />
        </button>

        <div className={`menu-dropdown ${open? 'active' : 'inactive'}`} >
          <ul>
            <DropdownItem text = {"Perfil"}/>
            <DropdownItem text = {"Sair"}/>
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
