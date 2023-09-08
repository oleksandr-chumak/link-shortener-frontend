import styled from 'styled-components';

export const AuthMethodsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const GoogleAuthWrapper = styled.div`
  background-color: #ea4335;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease 0s;
  &:hover {
    background-color: black;
  }
`;
