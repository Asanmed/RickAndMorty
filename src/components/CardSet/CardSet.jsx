import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    requestCharacters,
    requestEpisodes,
    requestLocations,
    selectCategory,
    selectCharactersList,
    selectEpisodesList,
    selectLocationsList,
    selectUiState,
} from '../../state/appSlice';
import { Categories } from '../../utils/Categories';
import UiState from '../../utils/UiState';

import CharCard from '../CharCard/CharCard';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import { NoSearchResults } from '../ErrorMessages/ErrorMessages';
import Loader from '../Loader/Loader';
import LocationCard from '../LocationCard/LocationCard';

import { Wrapper } from './styles';

/*Default number of cards to be shown on first render*/
const CARDS_TO_SHOW = 9;

const getRandomIds = (total, numberOfCards) => {
    let output = [];
    for (let index = 0; index < numberOfCards; index++) {
        output.push(Math.floor(Math.random() * (total - 1)));
    }
    return output;
};

const CardSet = () => {
    const dispatch = useDispatch();
    const activeCategory = useSelector(selectCategory);
    const uiState = useSelector(selectUiState);
    const chars = useSelector(selectCharactersList);
    const locs = useSelector(selectLocationsList);
    const eps = useSelector(selectEpisodesList);

    const [list, setList] = useState(chars);

    const renderCards = () => {
        switch (activeCategory) {
            case Categories.character: {
                return list.map((e) => {
                    return (
                        <CharCard
                            id={e.id}
                            key={e.id}
                            imgURL={e.image}
                            name={e.name}
                            status={e.status}
                            specie={e.species}
                            gender={e.gender}
                            episodes={e.episode ? e.episode.length : ''}
                        />
                    );
                });
            }
            case Categories.location: {
                return list.map((e) => {
                    return (
                        <LocationCard
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            type={e.type}
                            dimension={e.dimension}
                        />
                    );
                });
            }
            case Categories.episode: {
                return list.map((e) => {
                    return (
                        <EpisodeCard
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            code={e.episode}
                        />
                    );
                });
            }

            default:
        }
    };

    useEffect(() => {
        switch (activeCategory) {
            case Categories.character: {
                chars.results ? setList(chars.results) : setList(chars);
                break;
            }
            case Categories.location: {
                locs.results ? setList(locs.results) : setList(locs);

                break;
            }
            case Categories.episode: {
                eps.results ? setList(eps.results) : setList(eps);
                setList(eps);
                break;
            }

            default:
        }
    }, [activeCategory, chars, locs, eps]);

    useEffect(() => {
        switch (activeCategory) {
            case Categories.character: {
                dispatch(requestCharacters(getRandomIds(671, CARDS_TO_SHOW)));
                break;
            }
            case Categories.location: {
                dispatch(requestLocations());
                break;
            }
            case Categories.episode: {
                dispatch(requestEpisodes());
                break;
            }

            default:
        }
    }, [dispatch, activeCategory]);
    return (
        <>
            {uiState === UiState.ErrorNotFound && <NoSearchResults />}
            <Wrapper>
                {uiState === UiState.Loading && <Loader />}
                {list.length && uiState === UiState.Ready && renderCards()}
            </Wrapper>
        </>
    );
};

export default CardSet;
