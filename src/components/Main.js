import React from 'react';
import api from '../utils/api';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  
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

      setCards(
        cards.map((item) => ({
          id: item._id,
          name: item.name,
          link: item.link,
          likesNumber: item.likes.length
        }))
      );
    })
    .catch((err) => alert(err));
  }, []);

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
            {cards.map(({name, link, likesNumber}) => (
              <li className="card">
                <img className="card__image" src={link} alt={`Фото ${name}`} />
                <div className="card__description">
                  <h2 className="card__title">{name}</h2>
                  <div className="card__like-group">
                    <button className="card__like-button" type="button"></button>
                    <span className="card__like-counter">{likesNumber}</span>
                  </div>
                </div>
                <button className="card__delete-button" type="button"></button>
              </li>
            ))}
          </ul>
        </section>
      </main>
  );
}

export default Main;