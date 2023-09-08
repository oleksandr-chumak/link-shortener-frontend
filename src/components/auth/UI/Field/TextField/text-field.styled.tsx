import styled from 'styled-components'
import { Link } from 'react-router-dom'
interface ILabel {
  $isFocus: boolean;
}

export const Wrapper = styled.div`
  width: 100% ;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
`
export const LabelWrapper = styled.div`
  display: flex;
`
export const ResetPassword = styled(Link)`
  color: #5469d4;
  line-height: 1.5;
  font-size: 14px;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #3c4257;
  }
`
export const Label = styled.label<ILabel>`
  font-size: 14px;
  pointer-events: none;
  line-height: 1.5;
  flex: 1 1 auto;
  padding-left: 7px;
  color: #333;
  &:before {
    content: '';
    cursor: none;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    background-color: rgb(217, 217, 217);
    height: 3px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  &:after {
    content: '';
    cursor: none;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: rgb(127, 127, 127);
    border-radius: 5px;
    transform: translateX(${(props) => (props.$isFocus ? '0' : '-100%')});
    transition: all 0.5s ease;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 47px;
`;
export const FieldContainer = styled.div`
  display: flex;
`
export const Field = styled.input`
  height: 55px;
  padding: 0 7px 0 0;
  font-size: 16px;
  width: 100%;
  font-weight: 400;
  color: #333;
`;