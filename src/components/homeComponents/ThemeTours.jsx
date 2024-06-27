import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ttImg1 from "../../assets/homeAssets/ttImg1.png";
import ttImg2 from "../../assets/homeAssets/ttImg2.png";
import ttImg3 from "../../assets/homeAssets/ttImg3.png";
import ttImg4 from "../../assets/homeAssets/ttImg4.png";
import { motion, useAnimation, useInView } from "framer-motion";

const ThemeTours = () => {
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
      <div className="title">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        >
          Theme Tours
        </motion.h1>
        <motion.hr
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "50%" },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        />
      </div>
      <div className="items">
        <motion.div
          className="item"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.4,
            bounce: 0.3,
            delay: 0.3,
            type: "spring",
          }}
        >
          <img src={ttImg1} alt="" />
          <span>
            <h2>Las Vegas</h2>
            <p>The city of lights</p>
          </span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.4,
            bounce: 0.3,
            delay: 0.5,
            type: "spring",
          }}
          className="item"
        >
          <img src={ttImg2} alt="" />
          <span>
            <h2>Paris</h2>
            <p>The city of love</p>
          </span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.4,
            bounce: 0.3,
            delay: 0.7,
            type: "spring",
          }}
          className="item"
        >
          <img src={ttImg3} alt="" />
          <span>
            <h2>Alps</h2>
            <p>Family Christmas place</p>
          </span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{
            duration: 0.4,
            bounce: 0.3,
            delay: 0.9,
            type: "spring",
          }}
          className="item"
        >
          <img src={ttImg4} alt="" />
          <span>
            <h2>Grand Canyon</h2>
            <p>Unforgettable hiking</p>
          </span>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 5em 7%;
  .title {
    padding: 0 7%;
    h1 {
      font-family: "The Seasons";
      font-size: 3em;
      font-weight: 100;
      color: gray;
    }
    hr {
      width: 50%;
    }
  }
  .items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 2em;
    .item {
      width: 24%;
      position: relative;
      img {
        width: 100%;
        user-select: none;
        pointer-events: none;
        /* position: absolute;
        z-index: 0; */
      }
      span {
        display: flex;
        flex-direction: column;
        gap: 1px;
        width: 86%;
        z-index: 10;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: end;
        backdrop-filter: blur(20px);
        color: white;
        bottom: 5%;
        text-align: center;
        align-items: center;
        margin: 2% 7%;
        border-radius: 20px;
        padding: 5px 0;
        h2 {
          font-family: "The Seasons";
          font-weight: 300;
          font-size: 20px;
        }
        p {
          color: #dfdfdf;
          font-size: 15px;
          text-transform: capitalize;
        }
      }
    }
  }
  @media (max-width: 1030px) {
    .items {
      flex-wrap: wrap;
      .item {
        width: 45%;
      }
    }
  }
  @media (max-width: 500px) {
    .items {
      .item {
        width: 95%;
      }
    }
  }
`;

export default ThemeTours;
