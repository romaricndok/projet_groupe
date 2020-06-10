import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', 'Roboto', Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  button {
    background : ${({ theme }) => theme.text};
    color : ${({ theme }) => theme.body};
    border:none;
  }

  a {
    color :  ${({ theme }) => theme.a};
  }
  `;
