import React from "react";

function Card(props) {
  
  function handleClick() {
   props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <img className="card__image" src={props.card.link} alt={`Фото ${props.card.name}`} onClick={handleClick} />
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-group">
          <button className="card__like-button" type="button"></button>
          <span className="card__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="card__delete-button" type="button"></button>
    </li>
  );
}

export default Card;