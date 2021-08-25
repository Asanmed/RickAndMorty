import styled from 'styled-components';

import img from '../../img/rick-wc.jpg';
import { colors } from '../../styles/colors';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: capitalize;

    align-items: center;
    img {
        border-radius: 3rem;
        max-width: 60%;
    }

    span {
        color: ${colors.secondaryFont};
    }
`;

export const ErrorMessage = ({ msg }) => {
    return (
        <Wrapper>
            <h1>{msg}</h1>
        </Wrapper>
    );
};

export const NoSearchResults = () => {
    return (
        <Wrapper className="no-results">
            <h1>
                I could not find your <span>$#it</span>
            </h1>
            <img src={img} alt="rick wc" />
        </Wrapper>
    );
};
