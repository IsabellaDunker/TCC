import React, { useState } from 'react';
import Modal from 'react-modal';
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import './Modal.css'
import { updateEvent, deleteEvent } from '../../database.js'
import { formatarDataParaMySQL } from '../Calendar/Calendar'

// Configuração do modal (deve ser definida uma única vez em algum lugar)
Modal.setAppElement('#root'); // Especifica o elemento raiz do seu aplicativo

const EditModal = ({ isOpen, onRequestClose, selectedDate, dateTime, title, id  }) => {
  const formatDateMysql = formatarDataParaMySQL(selectedDate);
  const [selectEvent, setSelectEvent] = useState(
    {
      title: title,
      date: formatDateMysql,
      time: dateTime
    });
  const [confirmDeleteModalVisible, setConfirmDeleteModalVisible] = useState(false);
	const [idToDelete, setIdToDelete] = useState(null);

    const handleEventSubmit = async () => {
        try {   
            console.log(dateTime)
          const title = `${selectEvent.title}`
          const dateComplete = `${formatDateMysql}T${selectEvent.time}`;
          await updateEvent('event', { id:id, title: title, date: dateComplete }, id);
        } catch (error) {
          console.error('Erro ao criar um novo post:', error);
        }
      };

			const openConfirmDeleteModal = (id) => {
				setIdToDelete(id);
				setConfirmDeleteModalVisible(true);
			};
		
			const closeConfirmDeleteModal = () => {
				setIdToDelete(null);
				setConfirmDeleteModalVisible(false);
			};

      const handleEventDelete = async (id) => {
        openConfirmDeleteModal(id);
      };

			const handleConfirmDelete = async () => {
				console.log(`Excluindo o evento com ID: ${idToDelete}`);
				try {
					await deleteEvent('event', id);
				} catch (error) {
					console.error('Erro ao excluir o evento:', error);
				}
				closeConfirmDeleteModal();
				onRequestClose();
			};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='modal-test'
    >
      <h2>Editar evento</h2>
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
      <div className='container-title-b'>
      <button className='close-button' onClick={() => {
        handleEventDelete(id);
      }}><p>Excluir</p></button>
      <button className='save-button' onClick={() => {
        onRequestClose();
        handleEventSubmit();
      }}><p>Salvar</p></button>
      
      </div>
			{confirmDeleteModalVisible && (
        <ConfirmDeleteModal
          onConfirm={handleConfirmDelete}
          onCancel={closeConfirmDeleteModal}
        />
      )}
    </Modal>
  );
};

const ConfirmDeleteModal = ({ onConfirm, onCancel }) => {
    return (
      <div className="confirm-delete-modal">
        <p>Tem certeza que deseja excluir?</p>
        <button className='confirm-delete-modal-b' onClick={onConfirm}><p>Confirmar</p></button>
        <button className='confirm-delete-modal-b' onClick={onCancel}><p>Cancelar</p></button>
      </div>
    );
  };

export default EditModal;
