import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0;
  gap: 3.7rem;

  width: 20.3rem;
  height: 27.9rem;

  background: linear-gradient(180deg, #CACACA 0%, rgba(23, 15, 52, 0) 100%);
  //border: 0.1rem solid rgba(37, 203, 255, 0.1);
  border-radius: 1.8rem;

  //& :hover {
  //  background: linear-gradient(180deg, #322DC1 0%, rgba(23, 15, 52, 0) 100%);
  //}
`;

export const ProjectCardTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
