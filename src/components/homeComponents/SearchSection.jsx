import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import image from "../../assets/homeAssets/searchSectionImage.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const SearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
    // eslint-disable-next-line
  }, [isInView]);
  return (
    <Container>
      <motion.img
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
        src={image}
        alt=""
      />
      <div>
        <motion.h1
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100, scale: 0.4 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
        >
          Adventure Begins with a Single Choice.
        </motion.h1>
        {/* <div className="searchBar">
          <input type="text" placeholder="Where to?" />
          <button>
            <BsSearch className="icon" />
          </button>
        </div> */}
        <motion.div
          className="searchBar"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
        >
          <CiLocationOn className="icon" />
          <input type="search" placeholder="Where to?" />
          <span>
            <BsSearch className="icon" />
            <h3>Search</h3>
          </span>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 0% 3em 7%;
  color: #474747;
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  img {
    width: 30%;
    left: 8%;
    position: absolute;
  }
  div {
    padding: 10% 10% 10% 20%;
    border-radius: 70px 0 0 70px;
    text-align: center;
    width: 80%;
    background: #dfedf5c1;
    h1 {
      text-align: start;
      font-size: 5.5vw;
      font-weight: 100;
      font-family: "The Seasons";
    }
    .searchBar {
      background: white;
      display: flex;
      align-items: center;
      height: 60px;
      width: 100%;
      border-radius: 30px;
      .icon {
        color: var(--primaryColor);
        font-size: 35px;
        margin-left: 15px;
      }
      input {
        height: 100%;
        width: 70%;
        border: none;
        font-size: 16px;
        font-family: "Montserrat", sans-serif;
        margin-left: 10px;
        color: gray;
        outline: none;
      }
      span {
        background: var(--primaryColor);
        color: white;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-right: 7px;
        padding: 0 20px;
        height: 80%;
        border-radius: 30px;
        .icon {
          color: white;
          margin-left: 0;
          font-size: 25px;
        }
      }
    }
    div {
      width: 100%;
      padding: 0;
      margin-top: 10%;
      gap: 10px;
      display: flex;
      h3 {
        font-weight: 500;
      }
      p {
        color: gray;
        margin-top: 10px;
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
    img {
      top: 7%;
      width: 40%;
    }
    div {
      width: 90%;
      margin-top: 30%;
      padding: 13% 8% 8% 8%;
      h1 {
        font-size: 8vw;
      }
    }
  }
  @media (max-width: 600px) {
    img {
      top: 0;
      width: 40%;
    }
    div {
      margin-top: 30%;
      width: 99%;
      padding: 10%;
      text-align: end;
      h1 {
        text-align: end;
      }
    }
  }
  @media (max-width: 500px) {
    img {
      top: 5%;
      width: 60%;
    }
    div {
      margin-top: 45%;
      width: 100%;
      padding: 7%;
      border-radius: 30px 0 0 30px;
    }
    .searchBar {
      input {
        width: 90%;
      }
      .icon {
        font-size: 20px;
      }
      span {
        padding: 0 10px;
        h3 {
          font-size: 15px;
        }
        display: none;
        .icon {
          font-size: 1em;
        }
      }
    }
  }
`;

export default SearchSection;
