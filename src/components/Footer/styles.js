import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
    height: 12rem;
    width: 97vw;
    margin-bottom: 1.5rem;
    margin-top: 3rem;
    border-radius: 3rem;
    background: ${colors.primary};
    box-shadow: 0.2rem 0.2rem 1.5rem 0.2rem ${colors.transparentBlack};
`;
