import { createGlobalStyle } from "styled-components";

export const cores = {
    white: 'rgba(255, 255, 255, 1)',
    pink: 'rgba(230, 103, 103, 1)',
    colorLink: 'rgb(139, 135, 132)',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  "Roboto", sans-serif;
    }
    body {
        background-color: ${cores.white};
        color: ${cores.pink};
    }

`