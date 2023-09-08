import styled from 'styled-components';
import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import background from './auth-background.jpg';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${background});
`;
export const Form = styled.div`
  padding: 55px;
  margin: 40px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 390px;
  background-color: white;
  transition: all 1s ease 0s;
  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    border-radius: 0;
    padding: 40px;
    margin: 0;
  }
  @media (max-width: ${({ theme }) => theme.device.mobileS}) {
    padding: 20px;
  }
`;

export const Header = styled.h1`
  font-size: clamp(1vw, 30px, 9vw);
  color: #333;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 10px;
  font-weight: bold;
`;
export const Separator = styled.p`
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  padding: 10px 0 10px 0;
  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    padding: 40px 0 30px 0;
  }
`;
export const AuthRedirect = styled.p`
  text-align: center;
  padding: 10px 0 0 0;
  font-size: 12px;
  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    padding: 30px 0 0 0;
  }
`;
export const A = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  color: #5469d4;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #3c4257;
  }
`;

