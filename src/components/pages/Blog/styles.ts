import { Content } from '@components';
import styled from 'styled-components';

export const Container = styled(Content)`
  min-height: 100vh;
  padding-top: 80px;
`;

export const ListPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;