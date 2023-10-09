import React, { useState } from 'react';
import Modal from 'react-modal';

// Configuração do modal (deve ser definida uma única vez em algum lugar)
Modal.setAppElement('#root'); // Especifica o elemento raiz do seu aplicativo

const ModalComponent = ({ isOpen, onRequestClose, modalText }) => {

  const [name, setName] = useState('');
  const [hour, setHour] = useState('');

  const handleNameChange = (event) => {
    setHour(event.target.value);
  };
  const handleHourChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Adicionar novo evento</h2>
      <div>
				<label htmlFor="name">Evento:</label>
				<input 
        type="text" 
        id="name" 
        name="name"
        value={name}
        onChange={handleNameChange} />
        <label htmlFor="hour">Horário:</label>
				<input 
        type="time"
        id="hour"
        name="hour"
        value={hour}
        onChange={handleHourChange} />
      </div>
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default ModalComponent;
