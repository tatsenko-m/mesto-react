import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup({ isOpen, onClose, onCardDelete, card }) {

  function handleSubmit(evt) {
      evt.preventDefault();
      
      onCardDelete(card);
      }

  return (
    <PopupWithForm 
      title="Вы уверены?" 
      name="confirmation" 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}
    />
  );
}

export default ConfirmPopup;