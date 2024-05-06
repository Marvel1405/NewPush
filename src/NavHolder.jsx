import React from "react";
import styled from "@emotion/styled";

const NavHolder = () => {
  return (
    <Navs>
      <Nav>Product</Nav>
      <Nav>Features</Nav>
      <Nav>About</Nav>
      <Nav>Support</Nav>
      <HeaderButton>Login/ Signup</HeaderButton>
    </Navs>
  );
};

export default NavHolder;

const HeaderButton = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  background-color: #1b1c21;
  color: gray;
  border-radius: 50px;
  cursor: pointer;
  trasform: scale(1);
  transition: all 350ms;
  :hover {
    transform: scale(1.025);
    cursor: pointer;
    color: orange;
  }
  &.active {
    color: orange;
  }
`;
const Nav = styled.div`
  text-decoration: none;
  color: white;
  cursor: pointer;
  :hover {
    color: orange;
    transition: all 300ms eased-in-out;
  }
  &.active {
    color: orange;
  }
`;
const Navs = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  top: 70px;
  right: 10px;
  border-radius: 0px 0px 50px 50px;
`;
