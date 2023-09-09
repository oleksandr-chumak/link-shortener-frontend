import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { IoCloseOutline } from 'react-icons/io5'



const NavigationHeaderWrapper = styled.nav`
  display: flex;
  color: white;
  padding: 0 20px;
  background-color: ${({theme}) => theme.color.grey};
  width: 100%;
  height: 70px;
`
export const NavigationHeaderDesktopWrapper = styled(NavigationHeaderWrapper)`
  justify-content: center;
  gap: 10px ;
`
export const NavigationHeaderMobileWrapper = styled(NavigationHeaderWrapper)`
  justify-content: end;
`
export const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  padding: 20px;

  width: 100vw;
  height: 100vh;
  z-index: 2;
  
  transition: all 0.5s ease 0s;
  
  transform: translateX(100%);
  
  background-color: ${({theme}) => theme.color.black};
`
export const BurgerMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BurgerMenuIcon = styled(FiMenu)`
  font-size: 35px;
`
export const CloseBurgerMenuIcon = styled(IoCloseOutline)`
  font-size: 60px;
  color: white;
  cursor: pointer;
`
export const CloseBurgerMenuIconWrapper =  styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`
export const BurgerMenuList  = styled.ul`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;

`



export const NavigationHeaderItemWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  position: relative;
  padding: 0 20px;
  
  transition: all 0.5s ease 0s;
  
  border-radius: 50px;


  cursor: pointer;
  
  font-size: 18px;
  
  min-height: 70px;
  min-width: 112px;
`
export const NavigationItemHeader = styled.h2`
  font-weight: bold;
`
export const NavigationHeaderUnderline = styled.div`
  position: absolute;
  bottom: 0;
  
  width: 100%;
  height: 4px;
  border-radius: 10px;
  
  transition: all 0.6s ease 0s;
  opacity: 0;
  visibility: hidden;
  
  background-color: ${({theme}) => theme.color.brandPrimaryBlue};
`