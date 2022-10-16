import styled from "styled-components";

export const WorldsOrganismWrapper = styled.a`
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fade-in 0.5s ease-in-out;
  & :hover {
    cursor: pointer;
    //background-color: red;
  }
`;

export const WorldsOrganismTextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 2.8rem;
  
  width: 149px;
  height: 187px;
  left: 2rem;
  top: 94px;

  background: linear-gradient(180deg, #25CBFF 0%, rgba(23, 15, 52, 0) 100%);
  border-radius: 10px;
`;
