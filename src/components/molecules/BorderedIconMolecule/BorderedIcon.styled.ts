import styled from "styled-components";

interface BorderedIconI {
    width?: string;
    borderColor?: string;
    bgColor?: string;
}

export const BorderedIconWrapper = styled.div<BorderedIconI>`
  width: ${({width}) => width};
  height: ${({width}) => width};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid ${({borderColor}) => borderColor};
  padding: 1.1rem;
  border-radius: 50%;
  z-index: 2;
`;

export const BorderedIconBG = styled.div<BorderedIconI>`
  width: calc(100% - 1.1rem);
  height: calc(100% - 1.1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 50%;
`;
