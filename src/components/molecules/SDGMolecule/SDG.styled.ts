import styled from "styled-components";

interface SDGProps {
    isAbsolute?: boolean;
}

export const SDGWrapper = styled.div<SDGProps>`
  position: ${({isAbsolute}) => isAbsolute ? 'absolute' : 'relative'};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 83px;
  height: 93px;

  background: #FF0000;
  border-radius: 0 1.8rem;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
