import styled, { css } from 'styled-components'

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 30px;
  top: 0;
  position: relative;

  .nav-logo {
    width: 12.5rem;
    height: 2.5rem;
  }

  .nav-btn {
    z-index: 0;
    background: transparent;
    border-color: transparent;
    color: ${(props) => props.theme.clrPrimary5};
    font-size: 2rem;
    cursor: pointer;
    justify-self: end;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
  }

  .ball,
  .sun,
  .moon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .ball {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: ${(props) => props.theme.clrPrimary1};
    border-radius: 50%;
    left: 1px;
    z-index: 3;
    transition: transform 0.5s ease-in-out;
  }

  .sun {
    right: 5px;
  }
  .moon {
    left: 5px;
  }

  input[type='checkbox']:checked + .ball {
    transform: translate(29px, -50%);
  }

  .sun {
    right: 5px;
  }
  .moon {
    left: 5px;
  }

  .toggler {
    display: block;
    width: 60px;
    height: 31px;
    border: 2px solid ${(props) => props.theme.clrPrimary5};
    border-radius: 30px;
    position: relative;
    cursor: pointer;
  }

  input[type='checkbox'] {
    display: none;
  }
`

export const HeaderWrapper = styled.div`
  z-index: 5;
  background-color: ${(props) => props.theme.clrPrimary10};
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

export const HeaderLogo = styled.div`
  width: 30%;
  text-align: start;

  @media (max-width: 1024px) {
  }
`

export const HeaderNavBar = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  transition: all 1s;
  z-index: 2;

  @media (max-width: 1024px) {
    transform: translateX(1000px);

    ${({ isShowNavBarResponsive }) =>
      isShowNavBarResponsive &&
      css`
        transition: all 1s;
        transform: translateX(0);
      `}
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.clrGrey10};
  }
`

export const NumericalOrder = styled.span`
  color: ${(props) => props.theme.clrPrimary5};
  font-weight: bold;
  @media (max-width: 1024px) {
    color: ${(props) => props.theme.clrGrey4};
  }
`
export const NavItem = styled.h3`
  color: ${(props) => props.theme.clrGrey1};

  &:hover {
    color: ${(props) => props.theme.clrPrimary5};
    cursor: pointer;
    transition: all 0.25s;
  }
  @media (max-width: 1024px) {
    color: ${(props) => props.theme.clrGrey4};

    &:hover {
      font-size: 2.5rem;
    }
  }

  a {
    color: ${(props) => props.theme.clrGrey1};
    &:hover {
      color: ${(props) => props.theme.clrPrimary5};
      cursor: pointer;
      transition: all 0.25s;
    }
  }
`

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`
export const BarMenu = styled.div`
  margin-right: 50px;
  cursor: pointer;
  display: none;
  i {
    font-size: 30px;
    color: ${(props) => props.theme.clrPrimary5};
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const CloseBtn = styled.div`
  cursor: pointer;

  i {
    font-size: 30px;
    color: ${(props) => props.theme.clrPrimary5};
  }
  display: none;

  @media (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 50px;
  }
`
