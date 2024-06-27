import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import bannerImg1 from "../../assets/homeAssets/bannerImg1.png";
import bannerImg2 from "../../assets/homeAssets/bannerImg2.png";
import bannerImg3 from "../../assets/homeAssets/bannerImg3.png";
import bgElement from "../../assets/homeAssets/bgElement.png";
import { motion, useAnimation, useInView } from "framer-motion";

const Banner = () => {
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
      <img className="bgElement" src={bgElement} alt="" />
      <motion.div
        className="row1"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
      >
        <h1>Explore</h1>
        <img src={bannerImg1} alt="" />
      </motion.div>
      <motion.div
        className="row2"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
      >
        <img src={bannerImg2} alt="" />
        <h1>The World.</h1>
      </motion.div>
      <motion.div
        className="row3"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
      >
        <h1>Feel</h1>
        <img src={bannerImg3} alt="" />
        <h1 className="rh1">Alive</h1>
      </motion.div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  position: relative;
  .bgElement {
    position: absolute;
    width: 60%;
    margin-top: 12em;
    z-index: 0;
    opacity: 0.3;
  }
  div {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    img {
      width: 44%;
    }
    h1 {
      font-family: "The Seasons", serif;
      font-size: 8vw;
      font-weight: 100;
    }
  }
  .row2 {
    img {
      width: 15%;
    }
  }
  @media (max-width: 700px) {
    .bgElement {
      width: 100%;
    }
    div {
      h1 {
        font-size: 13vw;
      }
    }
    .row2,
    .row1 {
      h1 {
        font-size: 15vw;
      }
    }
  }
  @media (max-width: 610px) {
    .row2 {
      h1 {
        font-size: 15vw;
      }
      img {
        width: 40%;
      }
    }
  }
  @media (max-width: 500px) {
    padding: 5em 7%;
    .row1 {
      flex-direction: column;
      align-items: flex-start;
      h1 {
        font-size: 18vw;
      }
      img {
        align-self: end;
        width: 70%;
      }
    }
    .row3 {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      h1 {
        font-size: 15vw;
      }
      img {
        align-self: end;
        width: 60%;
      }
      .rh1 {
        font-size: 18vw;
      }
    }
  }
`;

export default Banner;
