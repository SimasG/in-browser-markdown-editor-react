import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
}

html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Mono', monospace;
    font-family: 'Roboto Slab', serif;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body {
}

h1, h2, h3, h4, p, li, ul, span, a, button {
    color: #000;
    list-style-type: none;
    text-decoration: none;
}

h1 {
    font-family: 'Roboto Slab', serif;
    font-size: 3.2rem;
    font-weight: bold;
}

h2 {
    font-family: 'Roboto Slab', serif;
    font-size: 2.8rem;
    font-weight: 300;
}

h3 {
    font-family: 'Roboto Slab', serif;
    font-size: 2.4rem;
    font-weight: bold;
}

h4 {
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
    font-weight: bold;
}

h5 {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    font-weight: bold;
}

h6 {
    font-family: 'Roboto Slab', serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.brightOrange}
}

p {
    font-family: 'Roboto Slab', serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray2}
}

code {
    font-family: 'Roboto Mono', serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.black4}
}

ul, li, button {
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
    cursor: pointer;
}
`;

export default GlobalStyles;
