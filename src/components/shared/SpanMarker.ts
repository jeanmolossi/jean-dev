import styled from "styled-components";

export default styled.span`
  color: var(--yellow);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 16px;

  :before {
    content: '';
    display: inline-block;
    width: 80px;
    height: 3px;
    background-color: var(--yellow);
    border-radius: 8px;
  }  
`;