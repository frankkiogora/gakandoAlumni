import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNavbar>
      <StyledLogo to="/">Gakando Alumni</StyledLogo>
      <StyledHamburger onClick={toggle} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </StyledHamburger>
      <StyledNav isOpen={isOpen}>
        <StyledNavLink to="/" exact activeClassName="active">
          Home
        </StyledNavLink>
        <StyledNavLink to="/about" activeClassName="active">
          About
        </StyledNavLink>
        <StyledNavLink to="/blog" activeClassName="active">
          Blog
        </StyledNavLink>
        <StyledNavLink to="/contact" activeClassName="active">
          Contact
        </StyledNavLink>
        <StyledNavLink to="/alumni" activeClassName="active">
          Alumni
        </StyledNavLink>
      </StyledNav>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const StyledLogo = styled(Link)`
  color: #333;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;

const StyledHamburger = styled.div`
  display: none;
  cursor: pointer;

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #333;
    transition: all 0.3s ease-in-out;

    &:nth-child(2) {
      width: ${(props) => (props.isOpen ? "0" : "20px")};
    }

    &:nth-child(3) {
      width: ${(props) => (props.isOpen ? "25px" : "15px")};
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 767.98px) {
    display: block;
  }
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767.98px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    max-height: ${(props) => (props.isOpen ? "100vh" : "0")};
    transition: all 0.3s ease-in-out;
  }
`;

const StyledNavLink = styled(Link)`
  color: #68b04a;
  text-decoration: none;
  padding: 0 1rem;
  transition: all 0.3s ease-in-out;

  &.active {
    font-weight: bold;
  }

  &:hover {
    color: #333;
  }

  @media (max-width: 767.98px) {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

export default NavBar;
