import styled, { keyframes } from 'styled-components';

const ldsRingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LdsRingContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 25px;
  height: 25px;
`;

export const LdsRingDiv = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 25px;
  height: 25px;
  border: 5px solid #4281de;
  border-radius: 50%;
  animation: ${ldsRingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #4281de transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;


