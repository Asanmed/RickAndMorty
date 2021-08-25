import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
    width: 80%;
    height: auto;
    min-height: 8rem;
    background-color: ${colors.primary};
    border-radius: 1rem;
    box-shadow: 5px 5px 15px 5px ${colors.transparentBlack};

    position: relative;

    :hover {
        cursor: pointer;
    }

    :active {
        transform: translatey(0.6rem);
        box-shadow: 0.2rem 0.2rem 1.5rem 0.2rem ${colors.transparentBlack};
        transition-duration: 100ms;
    }

    img {
        box-shadow: 5px 5px 15px ${colors.transparentBlack};
        margin-top: 2rem;
        align-self: center;
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
    }

    .card-data {
        padding: 2rem;
    }

    span {
        color: #ed82d8;
    }

    .card-status-text {
        position: absolute;
        margin: 0;
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
        top: 1rem;
        left: 2rem;
        display: inline;
    }

    @keyframes shake {
        0% {
            transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
            transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
            transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
            transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
            transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
            transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
            transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -2px) rotate(-1deg);
        }
    }

    @media (min-width: 900px) {
        :hover {
            animation: shake 0.5s;
            animation-iteration-count: infinite;

            /*
            transform: translatey(-0.5rem);
            box-shadow: 0.7rem 0.7rem 2rem 0.7rem ${colors.transparentBlack};
            transition-duration: 300ms;
            transform: scale3d(1.2, 1.2, 1);
            z-index: 500;
            */
        }
        :active {
            animation-play-state: paused;
            transform: translatey(0.5rem);
            box-shadow: 0.2rem 0.2rem 1.5rem 0.2rem ${colors.transparentBlack};
            transition-duration: 100ms;
            transform: scale3d(1.19, 1.19, 1);
        }
    }
`;
