import { createGlobalStyle } from 'styled-components';
import './root.css'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        border: 0px;
        font-family: sans-serif;
    }

    body {
        margin: 0;
        font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* color: white; */
        width: 100vw;
        height: 100vh;
        background-color: var(--cinza-1);
        color: var(--cinza-5);
    }

    #root {
        width: 100%;
        height: 100%;
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;