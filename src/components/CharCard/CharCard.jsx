import React, { useState } from 'react';
import './CharCard.css';
const CharCard = ({
  clickHandler,
  imgURL,
  name,
  status,
  specie,
  gender,
  episodes,
}) => {
  const [stateFontColor, setStateFontColor] = useState(
    status === 'Alive' ? '#86D95F' : '#F27272'
  );
  return (
    <div onClick={clickHandler} className="card-container">
      <h4 className="card-status-text" style={{ color: `${stateFontColor}` }}>
        {status}
      </h4>
      <img className="card-img" src={imgURL} alt={`Character ${name}`} />
      <div className="card-data">
        <h4>
          <span>Name:</span> {name}
        </h4>

        <h4>
          <span>Specie:</span> {specie}
        </h4>
        <h4>
          <span>Gender:</span> {gender}
        </h4>
        <h4>
          <span>Appears in:</span> {episodes} episodes
        </h4>
      </div>
    </div>
  );
};

export default CharCard;
