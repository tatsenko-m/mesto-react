import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards(() => cards.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => alert(err));
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([user, cards]) => {
      setCurrentUser(user);
      setCards(cards);
    })
    .catch((err) => alert(err));
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick} 
          onCardLike={handleCardLike} 
          cards={cards}
        />
        <Footer />
        <PopupWithForm 
          title="Редактировать профиль" 
          name="profile" 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups}
        >
          <input
            name="name"
            id="name"
            className="popup__item popup__item_type_name"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__error" id="name-error"></span>
          <input
            name="about"
            id="about"
            className="popup__item popup__item_type_about"
            type="text"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__error" id="about-error"></span>
        </PopupWithForm>
        <PopupWithForm 
          title="Новое место" 
          name="card" 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}
        >
          <input
            name="title"
            id="title"
            className="popup__item popup__item_type_title"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="30"
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
        <PopupWithForm 
          title="Обновить аватар" 
          name="avatar" 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups}
        >
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
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
