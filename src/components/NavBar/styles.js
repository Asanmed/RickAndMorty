import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
    height: 8rem;
    width: 97vw;
    margin-bottom: 3rem;
    border-radius: 0 0 3rem 3rem;
    background: ${colors.primary};
    box-shadow: 0.2rem 0.2rem 1.5rem 0.2rem ${colors.transparentBlack};

    > * {
        &:last-child {
            margin-right: 2rem;
        }
    }

    @media (max-width: 720px) {
        width: 100vw;
        display: flex;
        justify-content: center;
    }
`;

export const ButtonsContainer = styled.div`
    margin-left: 2rem;
    display: flex;
    > * {
        margin-left: 1rem;
    }
    @media (max-width: 720px) {
        > * {
            margin-left: 0.3rem;
            &:first-child {
                margin-left: 0;
            }
        }
    }
`;
