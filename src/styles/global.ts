import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme["grey-700"]};
    color: ${(props) => props.theme["grey-100"]};
    overflow: hidden;
  }

  body, input, textarea, button, select {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`;
