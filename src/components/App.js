import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_type_profile">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form className="popup__form" name="profile">
            <h2 className="popup__title">Редактировать профиль</h2>
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
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_card">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form className="popup__form" name="card">
            <h2 className="popup__title">Новое место</h2>
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
            <button className="popup__save-button" type="submit">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_image">
        <div className="popup__img-container">
          <button className="popup__close-button" type="button"></button>
          <figure className="popup__figure">
            <img
              className="popup__image"
              src="/"
              alt=""
            />
              <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </div>
      <div className="popup popup_type_confirmation">
        <div className="popup__container popup__container_size_s">
          <button className="popup__close-button" type="button"></button>
          <form className="popup__form" name="confirmation">
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__save-button" type="submit">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container popup__container_size_m">
          <button className="popup__close-button" type="button"></button>
          <form className="popup__form" name="avatar">
            <h2 className="popup__title">Обновить аватар</h2>
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
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
      <template id="card-template">
        <li className="card">
          <img
            className="card__image"
            src="/"
            alt=""
          />
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like-group">
              <button className="card__like-button" type="button"></button>
              <span className="card__like-counter"></span>
            </div>
          </div>
          <button className="card__delete-button" type="button"></button>
        </li>
      </template>
    </>
  );
}

export default App;
