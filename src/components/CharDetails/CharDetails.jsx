import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';

import {
    requestSingleCharacter,
    selectCharacter,
    selectUiState,
} from '../../state/appSlice';
import UiState from '../../utils/UiState';
import { BackButton } from '../Buttons/Buttons';

import { Wrapper } from './styles';
const CharDetails = () => {
    let { id } = useParams();
    const uiState = useSelector(selectUiState);

    const charFromStore = useSelector(selectCharacter);

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestSingleCharacter(id));
    }, [dispatch, id]);

    return (
        <>
            {uiState === UiState.Ready && charFromStore.name && (
                <Wrapper status={charFromStore.status}>
                    <div className="card-status-container">
                        <h4 className="card-status-text">
                            {charFromStore.status}
                        </h4>
                    </div>
                    <img
                        className="card-img"
                        src={charFromStore.image}
                        alt={`Character ${charFromStore.name}`}
                    />
                    <div className="info-container">
                        <div className="firstGroup">
                            <div className="card-data">
                                <h4>
                                    <span>Name:</span> {charFromStore.name}
                                </h4>

                                <h4>
                                    <span>Specie:</span> {charFromStore.species}
                                </h4>
                                <h4>
                                    <span>Gender:</span> {charFromStore.gender}
                                </h4>
                            </div>
                            <div className="card-data">
                                <h4>
                                    <span>Last seen location: </span>{' '}
                                    {charFromStore.location.name}
                                </h4>

                                <h4>
                                    <span>Origin location: </span>{' '}
                                    {charFromStore.origin.name}
                                </h4>
                            </div>
                        </div>
                        <div className="card-data">
                            <h4>
                                <span>Appears in Episodes: </span>

                                {charFromStore.episode.map((e) => {
                                    const episodeId =
                                        e.match(/\/([^/]+)\/?$/)[1];
                                    return (
                                        <span
                                            className="episodeLink"
                                            key={e}
                                            onClick={() =>
                                                history.push(
                                                    `episode/${episodeId}`
                                                )
                                            }
                                        >
                                            {` ${episodeId} `}
                                        </span>
                                    );
                                })}
                            </h4>
                        </div>
                    </div>
                    <BackButton onClick={() => history.goBack()}>
                        Back
                    </BackButton>
                </Wrapper>
            )}
        </>
    );
};

export default CharDetails;
