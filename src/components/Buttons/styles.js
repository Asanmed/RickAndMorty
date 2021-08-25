import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
    width: 12rem;
    height: 4rem;
    margin-top: 2rem;
    background-color: ${colors.primary};
    border-radius: 1rem;
    text-transform: capitalize;
    box-shadow: 0.3rem 0.3rem 1.5rem 0.3rem ${colors.transparentBlack};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    :hover {
        transform: translatey(-0.1rem);
        box-shadow: 0.4rem 0.4rem 1.5rem 0.4rem ${colors.transparentBlack};
        cursor: pointer;
    }

    :active {
        transform: translatey(0.1rem);
        box-shadow: 0.2rem 0.2rem 1.5rem 0.2rem ${colors.transparentBlack};
    }
`;

export const WrapperFlatTop = styled(Wrapper)`
    background: ${colors.primaryLighter};
    color: ${(props) =>
        props.selected ? colors.green : colors.transparentBlack};
    font-weight: ${(props) => (props.selected ? 900 : 300)};
    font-size: ${(props) => (props.selected ? '1.8rem' : '1.6rem')};
    height: ${(props) => (props.selected ? '6rem' : '5rem')};
    margin-top: 0px;
    border-radius: 0 0 1rem 1rem;
`;
