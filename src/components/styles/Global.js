import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background: transparent;
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
    color: #fff;
    list-style-type: none;
    text-decoration: none;
}

h1 {
    font-family: 'Roboto Slab', serif;
    font-size: 3.2rem;
}

h2 {
    font-family: 'Roboto Slab', serif;
    font-size: 2.8rem;
    letter-spacing: -0.15rem;
}

h3 {
    font-family: 'Roboto Slab', serif;
    font-size: 2.4rem;
    letter-spacing: 0.26rem;
}

h4 {
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
    letter-spacing: 0.1rem;
}

h5 {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
}

h6 {
    font-family: 'Roboto Slab', serif;
    font-size: 1.4rem;
}

p {
    font-family: 'Roboto Slab', serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
}

ul, li, button {
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
    cursor: pointer;
}
`;

export default GlobalStyles;
