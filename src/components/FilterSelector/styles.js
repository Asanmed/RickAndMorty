import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const StyledSelect = styled.select`
    box-sizing: border-box;
    width: 18rem;
    height: 4rem;
    margin-top: 2rem;
    color: ${colors.primary};
    font-size: 1.6rem;
    font-weight: 900;
    background-color: ${colors.mainFont};
    border-style: none;
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 1.5rem 0.3rem ${colors.transparentBlack};

    :focus {
        outline: none;
        box-shadow: 0.1rem 0.1rem 1.2rem 0.1rem ${colors.mainFont};
        transform: translatey(-0.1rem);
    }

    @media (max-width: 464px) {
        width: 100%;
    }
`;
