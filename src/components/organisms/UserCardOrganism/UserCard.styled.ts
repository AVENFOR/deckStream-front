import styled from "styled-components";

export const UserCardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  gap: 1.3rem;
  width: 203px;
  height: 68px;
`;

export const UserCardAvatar = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const UserCardIsLive = styled.div`
  position: absolute;
  width: 42px;
  height: 23px;
  left: 32px;
  top: 45px;
  background: #FF0000;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const UserCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserCardFollowers = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;
