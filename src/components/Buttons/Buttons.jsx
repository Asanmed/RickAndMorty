import { Wrapper, WrapperFlatTop } from './styles';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ButtonRounded = ({ clickHandler, children }) => {
    return (
        <Wrapper onClick={() => clickHandler()}>
            <p>{children}</p>
        </Wrapper>
    );
};

export const ButtonFlatTop = ({ clickHandler, children, active }) => {
    return (
        <WrapperFlatTop selected={active} onClick={clickHandler}>
            <p>{children}</p>
        </WrapperFlatTop>
    );
};

export const BackButton = styled.div`
    margin-top: 3rem;
    position: relative;
    width: 7rem;
    height: 2rem;
    text-align: center;
    font-size: large;
    font-weight: 700;
    border-radius: 2rem;
    background: ${colors.primaryLighter};
    color: ${colors.green};
    left: 50%;
    transform: translate(-50%);
    bottom: 1.5rem;
    box-shadow: 2px 2px 10px ${colors.transparentBlack};

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 900) {
        display: none;
    }
`;
