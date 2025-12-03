import React from 'react';
import './GamePrev.css';

const GamePrev = ({ image, name, description, showDescription = true }) => {
  return (
    <div className="game-prev-container">
      <div className="game-prev-image">
        <img src={image} alt={name} />
      </div>
      <div className="game-prev-content">
        <h3 className="game-prev-name">{name}</h3>
        {showDescription && (
          <p className="game-prev-description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default GamePrev;