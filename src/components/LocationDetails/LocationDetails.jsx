import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';
import services from '../../services/apiServices';

import {
    requestSingleLocation,
    selectLocation,
    selectUiState,
} from '../../state/appSlice';
import UiState from '../../utils/UiState';
import { BackButton } from '../Buttons/Buttons';

import { Wrapper } from './styles';
const LocationDetails = () => {
    const [residentsArray, setResidentsArray] = useState([]);
    let { id } = useParams();
    const uiState = useSelector(selectUiState);
    const dataStore = useSelector(selectLocation);

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestSingleLocation(id));
    }, [dispatch, id]);

    useEffect(() => {
        const getResidents = async () => {
            const residentsList = [];

            dataStore.residents.forEach((e) => {
                const residentId = e.match(/\/([^/]+)\/?$/)[1];
                residentsList.push(residentId);
            });

            if (residentsList.length > 0) {
                const residents = await services.getCharactersById(
                    residentsList
                );
                if (residents.data) {
                    setResidentsArray(residents.data);
                }
            } else {
                setResidentsArray([]);
            }
        };
        if (dataStore.residents) {
            getResidents();
        }
    }, [dataStore.residents]);

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
                                <span>Type:</span> {dataStore.type}
                            </h4>
                            <h4>
                                <span>Dimension:</span> {dataStore.dimension}
                            </h4>

                            <h4>
                                <span>Residents: </span>{' '}
                                {residentsArray.length
                                    ? residentsArray.map((e) => {
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
                                    : 'No residents found'}
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

export default LocationDetails;
