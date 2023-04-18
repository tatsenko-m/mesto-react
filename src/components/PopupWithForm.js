import React from "react";

function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <div
      className={`popup popup_type_${name}${isOpen ? " popup_opened" : ""}`}
      onMouseDown={(evt) =>
        evt.target.classList.contains("popup") &&
        !evt.target.closest(".popup__container")
          ? onClose()
          : null
      }
    >
      <div
        className={`popup__container${
          name === "confirmation"
            ? " popup__container_size_s"
            : name === "avatar"
            ? " popup__container_size_m"
            : ""
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
            {name === "confirmation"
              ? "Да"
              : name === "card"
              ? "Создать"
              : "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
