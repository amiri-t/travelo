import React from "react";
import styled from "styled-components";
import logo from "../assets/traveloLogo.png";
import { FaPhoneAlt, FaFacebook, FaTiktok } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ASitesLogo1 from "../assets/ASitesLogo.png";

const Footer = () => {
  return (
    <Container>
      <div className="top">
        <img src={logo} className="logo" alt="" />
        <div className="right">
          <div className="links">
            <h3>Links</h3>
            <Link to={"/"} className="link-styles">
              <p>Home</p>
            </Link>
            <Link to={"/produktet"} className="link-styles">
              <p>Produktet</p>
            </Link>
            <Link to={"/kontakti"} className="link-styles">
              <p>Kontakti</p>
            </Link>
          </div>
          <div className="contact">
            <div>
              <IoMail className="icon" />
              <h3>info@travelo.web.app</h3>
            </div>
            <div>
              <FaPhoneAlt className="icon" />
              <h3>+383 45 123 123</h3>
            </div>
            <span>
              <Link
                to={"https://www.instagram.com/21_dite_paakne/"}
                target="_blank"
              >
                <RiInstagramFill className="icon" />
              </Link>
              <Link to={"https://www.tiktok.com/@21ditepaakne"} target="_blank">
                <FaTiktok className="icon" />
              </Link>
              <Link
                to={"https://www.facebook.com/21ditepaakne"}
                target="_blank"
              >
                <FaFacebook className="icon" />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>Designed and Developed by:</p>
        <Link
          to={"https://asitesagency.com/"}
          className="link-styles"
          target="_blank"
        >
          <img src={ASitesLogo1} alt="" />
          <p>Visit ASites Agency</p>
        </Link>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 7% 3em 7%;
  border-top: 1px solid #c5c5c5;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 240px;
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4em;
      .links {
        display: flex;
        flex-direction: column;
        gap: 10px;
        h3 {
          font-weight: 500;
        }
        p {
          color: gray;
          font-weight: 300;
        }
      }
      .contact {
        display: flex;
        flex-direction: column;
        gap: 1em;
        div {
          display: flex;
          align-items: center;
          gap: 10px;
          .icon {
            font-size: 3em;
            background: var(--primaryColor);
            padding: 10px;
            border-radius: 10px;
            color: white;
          }
          h3 {
            font-weight: 300;
            color: var(--fontSecondaryColor);
          }
        }
        span {
          display: flex;
          gap: 10px;
          .icon {
            font-size: 3em;
            background: var(--primaryColor);
            padding: 10px;
            border-radius: 10px;
            color: white;
          }
        }
      }
    }
  }
  .bottom {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    p {
      color: var(--fontSecondaryColor);
      font-weight: 300;
      text-align: center;
    }
    img {
      width: 120px;
      margin: auto;
      display: flex;
    }
  }
  @media (max-width: 700px) {
    .top {
      flex-direction: column;
      gap: 3em;
      align-items: center;
      .right {
        flex-wrap: wrap;
        div {
          flex-wrap: wrap;
        }
      }
    }
  }
`;

export default Footer;
