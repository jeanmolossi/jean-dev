import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  :root {
    --dark-background: #0B1D26;
    --primary-color: #354147;
    --yellow: #FBD784;

    --max-content-width: 1366px;
    --center: 0 auto;

  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    font-family: 'Montserrat', serif;
    color: #fff;
    overflow-x: hidden;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', sans-serif;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  button {
    border: 0;
    color: #fff;
    cursor: pointer;

    :focus {
      outline: none;
    }
  }

  p {
    line-height: 150%;
  }
`;