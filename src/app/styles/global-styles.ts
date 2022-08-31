import {createGlobalStyle} from './styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
        width: 100%;
        line-height: 1.35;
    }
    body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    #app {
        background-color: #fafafa;
        min-height: 100%;
        min-width: 100%;
    }
    p,
    label {
        font-family: Georgia, Times, 'Times New Roman', serif;
        line-height: 1.35em;
    }
    input, select {
        font-family: inherit;
        font-size: inherit;
    }
`;

export default GlobalStyle;
