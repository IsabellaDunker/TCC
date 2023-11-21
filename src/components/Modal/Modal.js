import React, { useState } from 'react';
import Modal from 'react-modal';
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import './Modal.css'
import { postEvent } from '../../database.js'
import { formatarDataParaMySQL } from '../Calendar/Calendar'

// Configuração do modal (deve ser definida uma única vez em algum lugar)
Modal.setAppElement('#root'); // Especifica o elemento raiz do seu aplicativo

const ModalComponent = ({ isOpen, onRequestClose, selectedDate  }) => {
  const formatDateMysql = formatarDataParaMySQL(selectedDate);
  const [selectEvent, setSelectEvent] = useState(
    {
      title:'',
      date: '',
      time: ''
    });

    const handleEventSubmit = async () => {
      try {      
        const title = `${selectEvent.title}`
        const dateComplete = `${formatDateMysql}T${selectEvent.time}`;
        // Envia os dados do novo post para o servidor
        await postEvent('event', { title: title, date: dateComplete });
        // Limpa o formulário após a postagem
        setSelectEvent({ title: '', date: '', time: '' });
      } catch (error) {
        console.error('Erro ao criar um novo post:', error);
      }
    };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='modal-test'
    >
      <h2>Adicionar novo evento</h2>
      <p className="day-modal"><Moment format="DD [de] MMM. YYYY">{selectedDate}</Moment></p>
      <div className='input-container'>
				<label>Título:</label>
				<input 
        type="text" 
        value={selectEvent.title}
        className='input-field'
        onChange={(e) => setSelectEvent({ ...selectEvent,  title: e.target.value})} />
				<label>Horário:</label>
        <input 
        type="time"
        value={selectEvent.time}
        className='input-field'
        onChange={(e) => setSelectEvent({ ...selectEvent,  time: e.target.value })} />
      </div>
      <button className='save-button' onClick={() => {
        onRequestClose();
        handleEventSubmit()
      }}><p>Salvar</p></button>
    </Modal>
  );
};

export default ModalComponent;
