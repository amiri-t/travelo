import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/traveloLogo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("home");
    } else if (pathname === "/destinations") {
      setActiveTab("destinations");
    } else if (pathname === "/holiday-types") {
      setActiveTab("holiday-types");
    } else if (pathname === "/contact") {
      setActiveTab("contact");
    } else if (pathname === "/about-us") {
      setActiveTab("about-us");
    }
  }, [pathname]);
  return (
    <Container>
      <Link to={"/"} className="link-styles">
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul
        onClick={handleToggle}
        className={toggle ? "nav-menu active" : "nav-menu"}
      >
        <Link to={"/"} className="link-styles">
          <li className={activeTab === "home" ? "activeTab" : "nonActive"}>
            Home
          </li>
        </Link>
        <Link to={"/destinations"} className="link-styles">
          <li
            className={activeTab === "destinations" ? "activeTab" : "nonActive"}
          >
            Destinations
          </li>
        </Link>
        <Link to={"/current-deals"} className="link-styles">
          <li
            className={
              activeTab === "current-deals" ? "activeTab" : "nonActive"
            }
          >
            Current Deals
          </li>
        </Link>
        <Link to={"/contact"} className="link-styles">
          <li className={activeTab === "contact" ? "activeTab" : "nonActive"}>
            Contact
          </li>
        </Link>
        <Link to={"/about-us"} className="link-styles">
          <li className={activeTab === "about-us" ? "activeTab" : "nonActive"}>
            About Us
          </li>
        </Link>
      </ul>
      <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </Container>
  );
};
const Container = styled.div`
  background: var(--trPrimaryBackgroundColor);
  transition: 0.4s;
  backdrop-filter: blur(7px);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 4%;
  width: 100%;
  height: 70px;
  z-index: 100;
  box-sizing: border-box;
  color: #1d1d1d;
  .logo {
    width: 120px;
  }
  .nav-menu {
    display: flex;
    gap: 37px;
    list-style: none;
    align-items: center;
    li {
      font-weight: 400;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        color: var(--primaryColor);
      }
    }
    button {
      background: var(--fontPrimaryColor);
      border: none;
      color: var(--primaryBackgroundColor);
      padding: 7px 14px;
      font-size: 18px;
      border-radius: 20px;
      font-family: "Poppins", cursive;
      cursor: pointer;
      transition: 0.4s;
      :hover {
        box-shadow: 0 0 14px 2px var(--shadowColor);
      }
    }
    .activeTab {
      text-decoration: underline;
      text-underline-offset: 7px;
      font-weight: 600;
      color: var(--primaryColor);
    }
  }
  .toggleTheme {
    .themeIcon {
      font-size: 1.6em;
      cursor: pointer;
      color: var(--fontPrimaryColor);
    }
  }
  .mobile-menu {
    position: absolute;
    color: var(--fontPrimaryColor);
    right: 5%;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    display: none;
    margin-top: 7px;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 770px) {
    .nav-menu {
      background: var(--primaryBackgroundColor);
      width: 90%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 10%;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0%;
      right: -100%;
      transition: 0.3s;
      z-index: 99;
      border-left: 1px solid var(--fontSecondaryColor);
    }
    .mobile-menu {
      display: block;
      z-index: 99;
    }
    .nav-menu.active {
      right: 0%;
    }
  }
  @media (max-width: 400px) {
    .logo {
      width: 100px;
    }
    .nav-menu {
      width: 98%;
    }
  }
`;

export default Navbar;
