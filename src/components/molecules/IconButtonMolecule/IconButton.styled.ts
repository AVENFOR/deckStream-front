import styled from "styled-components";

type IconButtonPropsT = {
    backgroundColor: string;
}

export const IconButtonWrapper = styled.button<IconButtonPropsT>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  column-gap: 1rem;
  border-radius: 5rem;
  background-color: ${({backgroundColor}) => backgroundColor};
  border: 0.1rem solid ${({borderColor}) => borderColor};
  color: ${({color}) => color};
  min-width: 17rem;
  width: ${({width}) => width};
  min-height: 5.2rem;
  height: ${({height}) => height};
  gap: 2rem;
  &:hover {
    color: ${({color}) => color};
    background-color: transparent;
    border: 0.1rem solid ${({color}) => color};
  }
`;
