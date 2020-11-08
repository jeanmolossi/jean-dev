import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Content as ContentComponent} from '../../index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CurrentPart = styled(motion.div)`
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    right: 16px;
  }
`;

export const Part = styled(motion.button)`
  border-right: 2px solid #fff;
  padding: 8px;
  text-align: right;
  margin: 4px 0;
  opacity: 0.7;
  background: none;
`;

export const Content = styled(ContentComponent)`
  --content-padding: 0 100px;

  flex-direction: column;
  display: flex;
  padding: var(--content-padding);

  @media only screen and (max-width: 768px) {
    --content-padding: 0 80px 0 16px;
    row-gap: 32px;
  }
`;

export const HeroUnit = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  > h1 {
    margin: 32px 0;
  }
`;

export const GetStarted = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }

  >div:last-child {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 6px 12px #000;
  }
  
  div {
    flex: 1 0 50%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    z-index: 1;
  }

  > div:first-child{
    padding: 7%;

    ::before {
      content: '01';
      position: absolute;
      font-size: 196px;
      font-weight: bold;
      bottom: 50%;
      left: 0;
      z-index: 0;
      opacity: 0.1;
    }
  }

  a {
    color: var(--yellow);
    display: flex;
    align-items: center;
    gap: 8px;
  }

`;

export const DevEssentials = styled(GetStarted)`
  flex-direction: row-reverse;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }

  > div:first-child::before {
    content: '02';
  }
`;

export const YourObjecttive = styled(GetStarted)`
  > div:first-child::before {
    content: '03';
  }
`;
