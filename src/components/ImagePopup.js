import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image${props.isOpen ? ' popup_opened' : ''}`}>
        <div className="popup__img-container">
          <button className="popup__close-button" type="button"></button>
          <figure className="popup__figure">
            <img className="popup__image" src={props.card.link} alt={`Фото ${props.card.name}`} />
            <figcaption className="popup__caption">{props.card.name}</figcaption>
          </figure>
        </div>
      </div>
  );
}

export default ImagePopup;