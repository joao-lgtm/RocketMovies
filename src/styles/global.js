import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: 8px;
    scrollbar-color: ${({ theme }) => theme.COLORS.PINK_1000};
    border-radius: 20px;
  }

  *::-webkit-scrollbar {
    width: 8px;
    border-radius: 20px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.COLORS.PINK_1000};
  border-radius: 20px;
}

  body {
    background-color: ${({ theme }) => theme.BACKGROUND.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
    overflow-y: hidden;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab';
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`