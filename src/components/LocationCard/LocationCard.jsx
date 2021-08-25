import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { requestSingleLocation, selectLocation } from '../../state/appSlice';

import { Wrapper } from './styles';
const LocationCard = ({ id, name, type, dimension }) => {
    const loc = useSelector(selectLocation);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleClick = () => {
        dispatch(requestSingleLocation(id));
        history.push(`/location/${id}`);
    };
    useEffect(() => {}, [loc]);

    return (
        <Wrapper onClick={handleClick}>
            <div className="card-data">
                <h4>
                    <span>Name: </span> {name}
                </h4>
                <h4>
                    <span>Type: </span> {type}
                </h4>
            </div>
        </Wrapper>
    );
};

export default LocationCard;
