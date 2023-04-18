import React from 'react';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  
  return (
    <main>
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src="/"
              alt="Аватар профиля"
              onClick={onEditAvatar}
            />
          </div>
          <article className="profile__info">
            <h1 className="profile__title"></h1>
            <p className="profile__subtitle"></p>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </article>
          <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="gallery">
          <ul className="gallery__list">
          </ul>
        </section>
      </main>
  );
}

export default Main;