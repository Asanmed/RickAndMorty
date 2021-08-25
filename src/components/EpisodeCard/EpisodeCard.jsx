import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { requestSingleEpisode, selectEpisode } from '../../state/appSlice';

import { Wrapper } from './styles';
const EpisodeCard = ({ id, name, code }) => {
    const epi = useSelector(selectEpisode);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleClick = () => {
        dispatch(requestSingleEpisode(id));
        history.push(`/episode/${id}`);
    };
    useEffect(() => {}, [epi]);

    return (
        <Wrapper onClick={handleClick}>
            <div className="card-data">
                <div>
                    <span>Name:</span> {name}
                </div>
                <div>
                    <span>Season:</span> {code ? code.slice(2, 3) : ''}
                </div>
            </div>
        </Wrapper>
    );
};

export default EpisodeCard;
