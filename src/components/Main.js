import React from 'react';
import api from '../utils/api';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
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
          </ul>
        </section>
      </main>
  );
}

export default Main;