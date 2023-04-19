import React from 'react';
import Card from './Card';
import api from '../utils/api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([user, cards]) => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);

      setCards(cards);
    })
    .catch((err) => alert(err));
  }, []);

  const cardsElements = cards.map((card) => (
    <Card card={card} onCardClick={onCardClick} />
  ));

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Аватар профиля"
            onClick={onEditAvatar}
          />
        </div>
        <article className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
        </article>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="gallery">
        <ul className="gallery__list">
          {cardsElements}
        </ul>
      </section>
    </main>
  );
}

export default Main;