import React, { useState } from "react";
import {
  IconLogo,
  IconLogoMobile,
  Menu,
  MenuItems,
  NavbarContainer,
  NavbarWrapper,
} from "./Navbar.elements";
import { IoCodeSlash } from "react-icons/io5";
import { FaBars, FaRadiation } from "react-icons/fa";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import styles from "./Navbar.module.css";
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
                <FaRadiation onClick={() => setclick(!click)} color="#ebc88b" />
              ) : (
                <FaBars onClick={() => setclick(!click)} color="#ebc88b" />
              )}
            </IconLogoMobile>

            <Menu click={click}>
              <MenuItems>
                <Link
                  onClick={() => setclick(!click)}
                  className={styles.MenuItemsLink}
                  to="/"
                >
                  Home
                </Link>
              </MenuItems>
              <MenuItems>
                <Link
                  onClick={() => setclick(!click)}
                  className={styles.MenuItemsLink}
                  to="/about"
                >
                  About
                </Link>
              </MenuItems>
              <MenuItems>
                <Link
                  onClick={() => setclick(!click)}
                  className={styles.MenuItemsLink}
                  to="/proyects"
                >
                  Proyects
                </Link>
              </MenuItems>
              <MenuItems>
                <Link
                  onClick={() => setclick(!click)}
                  className={styles.MenuItemsLink}
                  to="/contact"
                >
                  Contact
                </Link>
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
