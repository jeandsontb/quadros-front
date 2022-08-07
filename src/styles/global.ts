import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgba(76, 78, 100, 0.05);
    -webkit-font-smoothing: antialiased;

    &.lockScroll {
      max-height: 100vh;
      overflow: hidden;
    }
  }

  body, input, button, textarea, select {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  #__next {
    min-height: 100vh;
  }

  .toastifyContainer{
    align-items: center !important;
    justify-content:center !important;
  }

  .Toastify__toast-container {
    z-index: 999999999999 !important;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.50%;
    }
  }

  :root {
    --main:#26C6F9; // cor inicial do botão
    --secondary:#1B1D36;
    --bg:#F6F8F9;
    --white: #ffffff;
    --white-2: #e6efed;

    --pantone: #F4F8F7;

    --gray-500: rgba(76, 78, 100, 0.87); // cor cinza médio
    --gray-400: rgba(76, 78, 100, 0.68); // cor cinza mais suave

   //fonts
   --primary-font: "Inter" , sans-serif;
   --secondary-font: "Quicksand", sans-serif;
  }

  input[type='date']::-webkit-inner-spin-button,
  input[type='date']::-webkit-calendar-picker-indicator {
    position: relative;
    opacity: 0;
    z-index: 5;
  }

  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--main);
    border-radius: 100px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: rgba(0,0,0,0.05);

    &:hover {
      background: rgba(0,0,0,0.08);
    }
  }

  .slick-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MuiMenu-paper {
    max-height: 20rem !important;
  }

  @media (max-width: 425px) {
    ::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-track {
      display: none;
    }
  }
`;
