import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useState } from "react";
import { motion } from 'framer-motion'
import data from "../data/db.json"
function MainNavigation() {
  const [open, setOpen] = useState(false);
  const centerElements = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Header>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
        className='header'
      >
        <Container className="container">
          <Logo>
            <HamburgerBtnConatiner
              style={centerElements}
              onClick={() => setOpen(!open)}
            >
              <HamburgerBtn open={open} />
            </HamburgerBtnConatiner>
            <Link to="/">
              الشركة الأوربية
            </Link>
          </Logo>
          {open && (
            <Nav style={centerElements}>
              <Menu style={centerElements}>
                {data.Links.map((link) => (
                  <MenuList key={link.title}>
                    <Link
                      to={link.Navlink}
                      onClick={() => setOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </MenuList>
                ))}
              </Menu>
            </Nav>
          )}

        </Container>
      </motion.div>
    </Header>
  );
}
const Header = styled.header``;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px 0;
  position: relative;
  @media (max-width: 767px) {
    padding: 30px 15px;
    gap: 15px;
    justify-content: center;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  a {
    color: var(--main-color);
    font-size: 3rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    font-family: "Monoton", cursive;
    letter-spacing: 1px;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;
const HamburgerBtnConatiner = styled.div`
  cursor: pointer;
  z-index: 101;
  margin-right: 40px;
  width: 40px;
  height: 40px;
  @media (max-width: 768px) {
    margin-right: 15px;
  }
`;
const HamburgerBtn = styled.span`
  display: block;
  height: 2px;
  width: 25px;
  background-color: ${(props) => (props.open ? "transparent" : "black")};
  position: relative;
  transition: background 0.2s ease-out;
  &::after,
  &::before {
    content: "";
    background-color: red;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-out;
  }
  &::before {
    top: 8px;
    ${(props) =>
    props.open &&
    css`
        transform: rotate(-45deg);
        top: 0;
      `};
  }
  &::after {
    top: -8px;
    ${(props) =>
    props.open &&
    css`
        transform: rotate(45deg);
        top: 0;
      `};
  }
`;

const Nav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #111111f1;
  z-index: 100;
  animation: fade 0.3s;
`;
const Menu = styled.ul`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const MenuList = styled.li`
  a {
    color: white;
    margin: 0 40px;
    font-size: 2rem;
    font-family: "Monoton", cursive;
    transition: all 0.3s ease;
    text-transform: capitalize;
    &:hover {
      font-size: 2.3rem;
      color: var(--main-color);
      transition: all 0.3s ease;
    }
    @media (max-width: 1200px) {
      margin: 0 20px;
    }
    @media (max-width: 992px) {
      margin: 0 10px;
    }
    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;
export default MainNavigation;
