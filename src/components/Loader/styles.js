import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
    position: absolute;
    min-width: 85%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 3vh;
        height: 3vh;
        border-radius: 100%;
        margin: 4rem;
        animation: bounce 0.8s 0.5s linear infinite;
    }
    .one {
        background: ${colors.transparentBlack};
    }

    .two {
        background: ${colors.transparentBlack};
        animation-delay: 0.1s;
    }

    .three {
        background: ${colors.transparentBlack};
        animation-delay: 0.2s;
    }

    .four {
        background: ${colors.transparentBlack};
        animation-delay: 0.3s;
    }

    @keyframes bounce {
        0%,
        50%,
        100% {
            transform: scale(1);
            filter: blur(0px);
        }
        25% {
            transform: scale(0.6);
            filter: blur(0.3rem);
        }
        75% {
            filter: blur(0.3rem);
            transform: scale(1.4);
        }
    }

    @media (max-width: 720px) {
    }
`;
