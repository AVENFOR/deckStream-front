import styled from "styled-components";

export const MainModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
`;

export const MainModalContentWrapper = styled.div`
  padding: 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.3rem;
  position: absolute;
  width: 562px;
  height: 525px;
  left: 457px;
  top: 250px;
  background: rgba(23, 15, 52, 0.9);
  border: 1px solid #221551;
  backdrop-filter: blur(35px);
  border-radius: 18px;
`;

export const MainModalButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
