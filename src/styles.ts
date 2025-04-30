import styled, { createGlobalStyle } from "styled-components";

export const cores = {
    white: 'rgba(255, 255, 255, 1)',
    pink: 'rgba(230, 103, 103, 1)',
    colorLink: 'rgb(139, 135, 132)',
    ligthPink: 'rgba(255, 235, 217, 1)',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  "Roboto", sans-serif;
        list-style: none;
    }
    body {
        background-color: ${cores.white};
        color: ${cores.pink};
    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`
export const Logo = styled.img`
    max-width: 124px;
    padding-top: 64px;

    @media (max-width: 768px) {
    max-width: 100px;
    padding-top: 32px;
  }

`;