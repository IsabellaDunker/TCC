import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FeatherIcon from 'feather-icons-react';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/pt-br';
import './Calendar.css'
import ModalComponent from '../Modal/Modal';
import MoreOptionsModal from '../Modal/Modal2.js';
import { index } from '../../database.js'
import { isSameDay, parseISO } from 'date-fns';

function Calendar1({ user }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  let [userRole, setUserRole] = useState('Commom User');

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const data = await index('event');
        setData(data);
        setUserRole(user.place)
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    };

    fetchData();
  }, [user.place])

  useEffect(() => {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const semanas = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    // Atualize as configurações de localização para 'es'
    moment.updateLocale('pt-br', {
      months: meses,
      weekdays: semanas,
    });
  }, []);
  // State for date selected by user
  let [selectedDate, setSelectedDate] = useState();
  if(selectedDate === undefined){
    selectedDate = new Date()
  }
  const selectedDateMysql = formatarDataParaMySQL(selectedDate)
  
  // Function to update selected date and calander text
  const handleDateChange = (value) => {
    setSelectedDate(value);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [moreOptionsModalIsOpen, setMoreOptionsModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openMoreOptionsModal = () => {
    setMoreOptionsModalIsOpen(true);
  };

  const closeMoreOptionsModal = () => {
    setMoreOptionsModalIsOpen(false);
  };

  const filteredEvents = loading
  ? ([]) : (data.filter(item => isSameDay(parseISO(selectedDateMysql), parseISO(item.date))));

  return (
    <div>
      <div className="calendar-main">
      <hr/>
        <div className="planner-container">
          <div className="planner">
            { userRole === 'admin' ? (
              <button
              className="plus-button"
              onClick={openModal}>
              <FeatherIcon icon="plus-circle" />
              </button>
            ) : (
              <div></div>
            )}
            <p className="day"><Moment format="DD">{selectedDate}</Moment></p>
            <p  className="day-week"><Moment format="dddd">{selectedDate}</Moment></p>
            </div>
          <div>
            { loading ? (
              <p></p>
            ) : (
              <div>
                {filteredEvents.length > 0 ? (
                  <ul>
                    {filteredEvents.map(item=>(
                      <div>
                        <ul key={item.id}>
                        <hr/>
                        <button 
                          className="more-button"  
                          onClick={openMoreOptionsModal}>
                          <FeatherIcon className="more-icon" icon="more-vertical" />
                        </button>
                        <FeatherIcon className="clock-icon" icon="clock" />
                        <li className="title">{item.title}</li>
                        <li className="date"><Moment format="H:mm ">{item.date}</Moment></li>
                      </ul>
                      <MoreOptionsModal
                        isOpen={moreOptionsModalIsOpen}
                        onRequestClose={closeMoreOptionsModal}
                        item={item}
                        selectedDate={selectedDate}
                      />
                      </div>
                    ))}
                  </ul>
                ) : (
                  <p></p>
                )}
              </div>
            )}
          </div>
        </div>
        <Calendar
          className="calendar"
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>

      <div className="modal">
        <ModalComponent
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          selectedDate={selectedDate}
        />
      </div>
    </div>

    
  );
}

export function formatarDataParaMySQL(data) {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda, se necessário
  const dia = String(data.getDate()).padStart(2, '0');

  const dataFormatada = `${ano}-${mes}-${dia}`;

  return dataFormatada;
}

export default Calendar1;