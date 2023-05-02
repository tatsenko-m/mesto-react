import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const inputRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
  
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm 
      title="Обновить аватар" 
      name="avatar" 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit} 
      isLoading={isLoading}
    >
      <input
        name="avatar"
        id="avatar"
        className="popup__item popup__item_type_link"
        type="url"
        ref={inputRef}
        placeholder="Ссылка на картинку"
        ondblclick="this.select()"
        required
      />
      <span className="popup__error" id="avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;