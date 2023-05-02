import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  return (
    <PopupWithForm 
      title="Новое место" 
      name="card" 
      isOpen={isOpen} 
      onClose={onClose}
    >
      <input
        name="title"
        id="title"
        className="popup__item popup__item_type_title"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__error" id="title-error"></span>
      <input
        name="link"
        id="link"
        className="popup__item popup__item_type_link"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__error" id="link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;