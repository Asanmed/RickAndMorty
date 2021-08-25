import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { requestSingleCharacter, selectCharacter } from '../../state/appSlice';

import { Wrapper } from './styles';
const CharCard = ({ id, imgURL, name, status, specie, gender, episodes }) => {
    const char = useSelector(selectCharacter);

    const history = useHistory();

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(requestSingleCharacter(id));
        history.push(`/${id}`);
    };
    useEffect(() => {}, [char]);

    return (
        <Wrapper status={status} onClick={handleClick}>
            <h4 className="card-status-text">{status}</h4>
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
        </Wrapper>
    );
};

export default CharCard;
