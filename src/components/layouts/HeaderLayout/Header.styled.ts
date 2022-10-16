import styled from "styled-components";
import exp from "constants";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
`;

export const IconWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  justify-content: center;
  animation: fadeIn 1s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const HeaderAdressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
