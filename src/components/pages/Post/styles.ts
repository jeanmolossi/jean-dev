import styled from 'styled-components';
import { Content } from '@components';

export const Container = styled(Content).attrs({ as: 'article' })`
  padding: 16px;
  padding-top: 120px;
  min-height: 100vh;
  flex-direction: column;
  max-width: 800px;

  small {
    margin-top: 24px;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 100%;
  width: 100%;
  margin: 32px auto;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 6px 12px #333;
`;

export const Texts = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;