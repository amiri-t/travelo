import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

const Stats = () => {
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
      <motion.h1
        ref={ref}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
      >
        <span>9</span> Years Of Experience
      </motion.h1>
      <motion.h1
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
      >
        <span>70+</span> Destinations
      </motion.h1>
      <motion.h1
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
      >
        <span>440+</span> 5 Star Reviews
      </motion.h1>
    </Container>
  );
};
const Container = styled.div`
  padding: 5% 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  h1 {
    font-size: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 1em;
    color: gray;
    /* background: #f5f5f5; */
    padding: 10px 30px;
    border-radius: 30px;
    span {
      font-family: "The Seasons";
      font-size: 2em;
      color: var(--primaryColor);
    }
  }
  @media (max-width: 820px) {
    flex-wrap: wrap;
  }
`;

export default Stats;
