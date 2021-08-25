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

    img {
        box-shadow: 5px 5px 15px ${colors.transparentBlack};
        margin-top: 2rem;
        align-self: center;
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
    }

    .info-container {
        margin-right: 4rem;
        word-wrap: break-word;
        display: flex;
        flex-direction: row;
    }

    .card-data {
        width: 100%;
        margin-left: 2rem;
    }

    span {
        color: #ed82d8;
    }

    .episodeLink {
        color: ${colors.mainFont};
        :hover {
            cursor: pointer;
            color: ${colors.secondaryFont};
            text-decoration: underline;
        }
    }

    .card-status-text {
        position: absolute;
        width: 7rem;
        text-align: center;

        margin: 0;

        left: 1rem;
        top: 1rem;
        color: ${(props) => {
            switch (props.status) {
                case 'Alive':
                    return colors.green;
                case 'Dead':
                    return colors.red;

                default:
                    return colors.secondaryFont;
            }
        }};
    }

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-evenly;

        img {
            margin: 0;
            width: 30rem;
            height: 30rem;
        }
        .info-container {
            flex-direction: column;
        }
    }

    @media (max-width: 900px) {
        .info-container {
            flex-direction: column;
        }

        .firstGroup {
            display: flex;
            flex-direction: row;
        }
    }

    @media (max-width: 720px) {
        .firstGroup {
            display: flex;
            flex-direction: column;
        }
    }
`;
