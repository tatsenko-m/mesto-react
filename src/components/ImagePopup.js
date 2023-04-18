import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
        <div className="popup__img-container">
          <button className="popup__close-button" type="button"></button>
          <figure className="popup__figure">
            <img className="popup__image" src="/" alt="" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </div>
  );
}

export default ImagePopup;