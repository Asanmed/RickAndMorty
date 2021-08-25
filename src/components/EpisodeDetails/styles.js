import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
    width: 80%;
    min-height: 40rem;
    height: auto;
    background-color: ${colors.primary};
    border-radius: 1rem;
    box-shadow: 5px 5px 15px 5px ${colors.transparentBlack};
    display: flex;
    flex-direction: column;
    position: relative;

    .card-data {
        width: 100%;
        margin-left: 2rem;
    }

    span {
        color: #ed82d8;
    }

    .link {
        color: ${colors.mainFont};
        :hover {
            cursor: pointer;
            color: ${colors.secondaryFont};
            text-decoration: underline;
        }
    }

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-evenly;
    }

    @media (max-width: 900px) {
    }

    @media (max-width: 720px) {
    }
`;
