import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  transition: opacity 0.5s ease-out;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  max-height: 70px;
  transition: all 0.2s ease 0s;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 10px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 1;
      margin-left: 5px;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        content: "";
        height: 2px;
        opacity: 0;
        position: absolute;
        left: 0;
        bottom: -6px;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 1rem;
  padding-top: 4rem;
  font-size: 14px;
  letter-spacing: 3px;
  width: 13rem;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
`;

const SignOut = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      visibility: visible;
      transition-duration: 1s;
    }
  }
`;

export {
  Nav,
  Logo,
  NavMenu,
  Login,
  UserImg,
  DropDown,
  SignOut
};