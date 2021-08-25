import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 85%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5rem 0;
    padding: 5rem;
    justify-items: center;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 5rem 0;
        padding: 5rem;
        justify-items: center;
    }

    @media (max-width: 720px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 5rem 0;
        padding: 5rem;
        justify-items: center;
    }

    @media (max-width: 464px) {
    }
`;
