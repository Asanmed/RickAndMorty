import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;//0.1rem = 1pixel
    }
    body {
        margin: 0;
        color: #f0cce9;
        background-color: #66385d;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1.6rem;//restore default font size to 16px
        
    }

    .App {
        margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
   // justify-content: center;
}
`;
