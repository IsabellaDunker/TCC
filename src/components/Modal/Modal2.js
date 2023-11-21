import React, { useState } from 'react';
import Modal from 'react-modal';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/pt-br';
import './Modal.css'
import EditModal from './EditModal';

// Configuração do modal (deve ser definida uma única vez em algum lugar)
Modal.setAppElement('#root'); // Especifica o elemento raiz do seu aplicativo

const Modal2 = ({ isOpen, onRequestClose, item, selectedDate }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let formatData = formatarData(item.date)
  function openModal() {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='modal-test'
    >
      <h2>Detalhes do evento</h2>
      { item && (
        <div>
          <div className='container-title'>
            <h4>Título:</h4>
            <p>{item.title}</p>
          </div>
          <div className='container-title'>
            <h4>Data:</h4>
            <p><Moment format="DD [de] MMMM [às] hh:mm [horas]">{item.date}</Moment></p>
          </div>
          <div className='container-title'>
            <h4>Detalhes:</h4>
            <p>Evento acontecerá no campus da Unipam</p>
          </div>
          <div className='container-title-b'>
            <button className='close-button' onClick={() => {
              openModal()
            }}><p>Editar</p></button>
            <button className='save-button' onClick={() => {
              onRequestClose();
            }}><p>Fechar</p></button>
          </div>
        </div>
      )}
    <EditModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      selectedDate={selectedDate}
      dateTime={formatData}
      title={item.title}
      id={item.id}
    />
    </Modal>
    
  );
};

export function formatarData(data) {
  const test = new Date(data)
  const horas = ('0' + test.getHours()).slice(-2);
  const minutos = ('0' + test.getMinutes()).slice(-2);
  const segundos = ('0' + test.getSeconds()).slice(-2);

  // Formatar para obter a hora no formato MySQL
  const horaMySQL = `${horas}:${minutos}:${segundos}`;
  return horaMySQL;
}

export default Modal2;
