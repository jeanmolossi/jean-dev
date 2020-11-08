import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-background);
  min-height: 100vh;

  --padding: 32px 80px;
  @media only screen and (max-width: 425px) {
    --padding: 16px;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left:0;
  right: 0;
  z-index: 99999;
  display: flex;
  justify-content: space-between;
  padding: var(--padding);
  background: var(--dark-background);

  .menu-button {
    display: none;
    flex: 0 0 10%;
    align-items: center;
    justify-content: center;

    background: none;
    font-size: 32px;
    z-index: 9999;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: bold;
  }


  @media only screen and (max-width: 425px) {
    .menu-button {
      display: flex;
    }

    nav {
      position: fixed;
      width: 100vw;
      left: 0;
      top: 0;
      bottom: 0;
      background: var(--dark-background);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      transition: 0.4s ease-in-out;

      > a {
        padding: 16px;
      }

      &.closed {
        left: 100%;
      }

      &.opened {
        display: flex;
      }
    }
  }
`;


export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--padding);

  h1 {
    margin: 32px 0;
  }

  h3 {
    color: var(--yellow);
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }


  > div {
    flex: 1;
    display: flex;

    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    :first-child {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    row-gap: 16px;
    padding: 16px 80px 16px 16px;

    h1 {
      margin: 0;
    }

    > div {
      row-gap: 32px;
      flex-direction: column;
      width: 100%;
    }
  }
`;