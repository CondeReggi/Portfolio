import React, { useState } from "react";
import {
  IconLogo,
  IconLogoMobile,
  LinkStyled,
  Menu,
  MenuItems,
  NavbarContainer,
  NavbarWrapper,
} from "./Navbar.elements";
import { IoCodeSlash } from "react-icons/io5";
import { FaBars, FaRadiation } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Proyects from "../Proyects/Proyects";
import Contact from "../Contact/Contact";
 
const Navbar = () => {
  const [click, setclick] = useState(false);
  return (
    <>
      <Router>
        <NavbarContainer>
          <NavbarWrapper>
            <IconLogo>
              <IoCodeSlash size="2em" />
            </IconLogo>

            <IconLogoMobile>
              {click ? (
                <FaRadiation onClick={() => setclick(!click)} color="inherit" />
              ) : (
                <FaBars onClick={() => setclick(!click)} color="inherit" />
              )}
            </IconLogoMobile>

            <Menu click={click}>
              <MenuItems>
                <LinkStyled
                  onClick={() => setclick(!click)}
                  to="/"
                >
                  Home
                </LinkStyled>
              </MenuItems>
              <MenuItems>
                <LinkStyled
                  onClick={() => setclick(!click)}
                  to="/about"
                >
                  About
                </LinkStyled>
              </MenuItems>
              <MenuItems>
                <LinkStyled
                  onClick={() => setclick(!click)}
                  to="/proyects"
                >
                  Proyects
                </LinkStyled>
              </MenuItems>
              <MenuItems>
                <LinkStyled
                  onClick={() => setclick(!click)}
                  to="/contact"
                >
                  Contact
                </LinkStyled>
              </MenuItems>
            </Menu>
          </NavbarWrapper>
        </NavbarContainer>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/proyects">
              <Proyects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </>
  );
};

export default Navbar;
