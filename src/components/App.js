import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input
          name="name"
          id="name"
          className="popup__item popup__item_type_name"
          type="text"
          placeholder="Имя"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="popup__error" id="name-error"></span>
        <input
          name="about"
          id="about"
          className="popup__item popup__item_type_about"
          type="text"
          placeholder="О себе"
          minlength="2"
          maxlength="200"
          required
        />
        <span className="popup__error" id="about-error"></span>
      </PopupWithForm>
      <PopupWithForm title="Новое место" name="card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input
          name="title"
          id="title"
          className="popup__item popup__item_type_title"
          type="text"
          placeholder="Название"
          minlength="2"
          maxlength="30"
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
      <PopupWithForm title="Вы уверены?" name="confirmation"></PopupWithForm>
      <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
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
      <ImagePopup />
    </>
  );
}

export default App;
