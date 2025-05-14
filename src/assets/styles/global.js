import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    font-family: 'Roboto', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  footer, header, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    padding: 0 3.2rem;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`
