import React from "react";

function PopupWithForm({ title, name }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button"></button>
        <form className="popup__form" name={name}>
          <h2 className="popup__title">{title}</h2>
          <button className="popup__save-button" type="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
