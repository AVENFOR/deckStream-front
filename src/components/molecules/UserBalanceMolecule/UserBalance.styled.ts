import styled from "styled-components";

export const UserBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 2px;

  width: 433px;
  height: 91px;

  border-radius: 10px;
  color: ${({theme}) => theme.TOKENS.S2.i400};;

  /* Inside auto layout */

  //flex: none;
  //order: 1;
  //flex-grow: 0;
`;

export const UserBalanceSubWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
