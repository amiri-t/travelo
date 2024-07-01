import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import serviceImg from "../../assets/homeAssets/servicesImg.png";
import { motion, useAnimation, useInView } from "framer-motion";

const Services = () => {
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
      <div className="left">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        >
          What services we provide
        </motion.h1>
        <div>
          <motion.span
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
          >
            <h2>Travel Plan</h2>
            <p>
              Travel plane are not really an instruemnt themselves but a
              delivery mechanism or strategy for other mostly
            </p>
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
          >
            <h2>Flight Booking</h2>
            <p>
              Discover your next destination. Find deals on domestic and
              international flights.
            </p>
          </motion.span>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 0.4, delay: 0.9, type: "spring" }}
          >
            <h2>Accommodation</h2>
            <p>
              Looking for the best hotels with great deals? No need to look
              further, we got you back in this one too
            </p>
          </motion.span>
        </div>
      </div>
      <motion.img
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.9, type: "spring" }}
        src={serviceImg}
        alt=""
      />
    </Container>
  );
};
const Container = styled.div`
  padding: 5em 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  img {
    width: 50%;
  }
  .left {
    h1 {
      font-size: 5.5vw;
      font-family: "The Seasons", sans-serif;
      font-weight: 200;
      line-height: 1em;
      margin-bottom: 0.6em;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 1em;
      span {
        h2 {
          font-weight: 500;
          color: var(--primaryColor);
        }
        p {
          color: gray;
        }
      }
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    .left {
      h1 {
        font-size: 12vw;
      }
    }
    img {
      width: 70%;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    .left {
      h1 {
        font-size: 14vw;
      }
    }
    img {
      width: 100%;
    }
  }
`;

export default Services;
