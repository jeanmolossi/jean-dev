import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 0 0 calc(33% - 16px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: 1024px) {
    flex: 0 0 calc(50% - 16px);
    padding: 16px;
  }

  @media only screen and (max-width: 425px) {
    flex: 1 0 100%;
    padding: 16px;
  }
`;

export const ImageContainer = styled.div`
  min-height: 100px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 12px #333;

  div {
    position: relative;

    :after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--yellow);
      opacity: 0;
      z-index: 0;
      transition: all 0.3s;
    }

    &:hover:after {
      opacity: 0.3;
    }
  }

  img {
    transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  img:hover {
    transform: scale(1.08);
  }
`;

export const ExcerptContainer = styled.div` 
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;

  a {
    transition: color 0.3s;
  }

  a:hover {
    color: var(--yellow);
  }
`;