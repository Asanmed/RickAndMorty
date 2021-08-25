import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';
import services from '../../services/apiServices';

import {
    requestSingleEpisode,
    selectEpisode,
    selectUiState,
} from '../../state/appSlice';
import UiState from '../../utils/UiState';
import { BackButton } from '../Buttons/Buttons';

import { Wrapper } from './styles';
const EpisodeDetails = ({ from }) => {
    const [charactersArray, setCharactersArray] = useState([]);
    let { id } = useParams();
    const uiState = useSelector(selectUiState);
    const dataStore = useSelector(selectEpisode);

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestSingleEpisode(id));
    }, [dispatch, id]);

    useEffect(() => {
        const getCharacters = async () => {
            const charactersList = [];

            dataStore.characters.forEach((e) => {
                const residentId = e.match(/\/([^/]+)\/?$/)[1];
                charactersList.push(residentId);
            });

            if (charactersList.length > 0) {
                const characters = await services.getCharactersById(
                    charactersList
                );
                if (characters.data) {
                    setCharactersArray(characters.data);
                }
            } else {
                setCharactersArray([]);
            }
        };
        if (dataStore.characters) {
            getCharacters();
        }
    }, [dataStore]);

    return (
        <>
            {uiState === UiState.Ready && (
                <Wrapper>
                    <div className="info-container">
                        <div className="card-data">
                            <h4>
                                <span>Name:</span> {dataStore.name}
                            </h4>

                            <h4>
                                <span>First time on Air:</span>{' '}
                                {dataStore.air_date}
                            </h4>

                            <h4>
                                <span>Characters: </span>{' '}
                                {charactersArray.length
                                    ? charactersArray.map((e) => {
                                          return (
                                              <p
                                                  className="link"
                                                  key={e.id}
                                                  onClick={() => {
                                                      history.push(`/${e.id}`);
                                                  }}
                                              >
                                                  {` ${e.name} `}
                                              </p>
                                          );
                                      })
                                    : 'No characters found'}
                            </h4>
                        </div>
                    </div>
                    <BackButton
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                        Back
                    </BackButton>
                </Wrapper>
            )}
        </>
    );
};

export default EpisodeDetails;
