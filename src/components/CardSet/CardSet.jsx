import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharCard from '../CharCard/CharCard';
import './CardSet.css';

const getRandomIds = () => {
  let output = [];
  for (let index = 0; index < 6; index++) {
    output.push(Math.floor(Math.random() * (671 - 1)) + 1);
  }
  return output;
};

const CardSet = ({ idList }) => {
  const [dataFromApi, setDataFromApi] = useState([]);
  //call to the api

  useEffect(() => {
    const callApi = async (idList) => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/${idList}`
      );
      setDataFromApi(result.data);
    };
    callApi(idList);
  }, [idList]);

  const renderCharCards = () => {
    return dataFromApi.map((element) => {
      return (
        <CharCard
          clickHandler={() => {
            console.log('COMING SOON...');
          }}
          key={element.id}
          imgURL={element.image}
          name={element.name}
          status={element.status}
          specie={element.species}
          gender={element.gender}
          episodes={element.episode.length}
        />
      );
    });
  };

  return <div className="set-container">{renderCharCards()}</div>;
};

export default CardSet;
