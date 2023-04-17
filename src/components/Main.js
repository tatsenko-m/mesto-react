import React from 'react';

function Main() {
  
  function handleEditAvatarClick() {
    const popupWithUpdateAvatarForm = document.querySelector('.popup_type_avatar');
    popupWithUpdateAvatarForm.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const popupWithEditProfileForm = document.querySelector('.popup_type_profile');
    popupWithEditProfileForm.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupWithAddCardForm = document.querySelector('.popup_type_card');
    popupWithAddCardForm.classList.add('popup_opened');
  }
  
  return (
    <main>
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src="/"
              alt="Аватар профиля"
              onClick={handleEditAvatarClick}
            />
          </div>
          <article className="profile__info">
            <h1 className="profile__title"></h1>
            <p className="profile__subtitle"></p>
            <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
          </article>
          <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="gallery">
          <ul className="gallery__list">
          </ul>
        </section>
      </main>
  );
}

export default Main;