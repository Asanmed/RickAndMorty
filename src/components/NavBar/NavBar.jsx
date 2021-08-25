import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { selectCategory, changeCategory } from '../../state/appSlice';

import { ButtonFlatTop } from '../Buttons/Buttons';

import { Categories } from '../../utils/Categories';

import { Wrapper, ButtonsContainer } from './styles';
import { useEffect } from 'react';

const NavBar = () => {
    const dispatch = useDispatch();
    const activeCategory = useSelector(selectCategory);
    const history = useHistory();

    useEffect(() => {
        history.push('/');
    }, [history, activeCategory]);

    return (
        <Wrapper>
            <ButtonsContainer>
                <ButtonFlatTop
                    active={activeCategory === Categories.character}
                    clickHandler={() => {
                        dispatch(changeCategory(Categories.character));
                    }}
                >
                    Characters
                </ButtonFlatTop>
                <ButtonFlatTop
                    active={activeCategory === Categories.location}
                    clickHandler={() => {
                        dispatch(changeCategory(Categories.location));
                    }}
                >
                    Locations
                </ButtonFlatTop>
                <ButtonFlatTop
                    active={activeCategory === Categories.episode}
                    clickHandler={() => {
                        dispatch(changeCategory(Categories.episode));
                    }}
                >
                    Episodes
                </ButtonFlatTop>
            </ButtonsContainer>
        </Wrapper>
    );
};

export default NavBar;
