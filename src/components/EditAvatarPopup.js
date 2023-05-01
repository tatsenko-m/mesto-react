import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm 
      title="Обновить аватар" 
      name="avatar" 
      isOpen={isOpen} 
      onClose={onClose}
    >
      <input
        name="avatar"
        id="avatar"
        className="popup__item popup__item_type_link"
        type="url"
        placeholder="Ссылка на картинку"
        ondblclick="this.select()"
        required
      />
      <span className="popup__error" id="avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;