import React from 'react';

function PopupWithForm({ title, name, children, isOpen, onClose }) {
  
  React.useEffect(() => {
    const handleEscKeyDown = (evt) => {
      if (evt.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscKeyDown);
    
      return () => {
        window.removeEventListener('keydown', handleEscKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const handleOverlayMouseDown = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      onClose();
    }
  };
  
  return (
    <div
      className={`popup popup_type_${name}${isOpen ? ' popup_opened' : ''}`}
      onMouseDown={handleOverlayMouseDown}
    >
      <div
        className={`popup__container${
          name === 'confirmation'
            ? ' popup__container_size_s'
            : name === 'avatar'
            ? ' popup__container_size_m'
            : ''
        }`}
      >
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <form className="popup__form" name={name}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__save-button" type="submit">
            {name === 'confirmation'
              ? 'Да'
              : name === 'card'
              ? 'Создать'
              : 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
