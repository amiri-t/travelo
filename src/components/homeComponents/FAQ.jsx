import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";

const FAQ = () => {
  const [activeAnswer, setActiveAnswer] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation1 = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation1.start("visible");
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
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        >
          Wondering About Something? <br /> Find Out Here!
        </motion.h1>
        <motion.hr
          variants={{
            hidden: { opacity: 0, width: 0 },
            visible: { opacity: 1, width: "50%" },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        />
      </div>
      <div ref={ref} className="questions">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
          className={activeAnswer === 1 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 1 ? null : 1)}
        >
          <span>
            <h2>How do I make a reservation?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            You can make a reservation online through our website or by calling
            our customer service team.
          </p>
        </motion.div>

        <hr />
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
          className={activeAnswer === 3 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 3 ? null : 3)}
        >
          <span>
            <h2>Are there any additional hidden fees?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            No, our pricing is transparent. All costs are included in the final
            price, with no hidden fees.
          </p>
        </motion.div>
        <hr />
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
          className={activeAnswer === 4 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 4 ? null : 4)}
        >
          <span>
            <h2>What is the cancellation policy?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            You can cancel up to 48 hours before departure for a full refund.
            Terms may vary by package.
          </p>
        </motion.div>
        <hr />
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.4, delay: 0.9, type: "spring" }}
          className={activeAnswer === 2 ? "active" : "row"}
          onClick={() => setActiveAnswer(activeAnswer === 2 ? null : 2)}
        >
          <span>
            <h2>Do you offer travel insurance?</h2>
            <MdKeyboardArrowDown className="icon" />
          </span>
          <p>
            Yes, we offer comprehensive travel insurance options to cover any
            unexpected events during your trip.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  background-image: var(--bgGradient4);
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
  .questions {
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 2em 0;
    align-items: center;
    hr {
      width: 80%;
      border: none;
      border-top: 1px solid #b3b3b3;
    }
    .row {
      transition: 0.4s;
      height: 40px;
      width: 80%;
      cursor: pointer;
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          color: #4d4d4d;
          font-weight: 400;
          font-size: 20px;
          margin-top: 7px;
        }
        .icon {
          font-size: 2em;
          color: var(--primaryColor);
        }
      }
      p {
        display: none;
      }
    }

    .active {
      transition: 0.4s;
      height: 50px;
      width: 80%;
      cursor: pointer;
      p {
        transition: 0.4s;
        display: flex;
        color: gray;
        font-weight: 300;
      }
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          font-weight: 500;
          font-size: 20px;
          color: var(--primaryColor);
          transition: 0.4s;
        }
        .icon {
          transform: rotate(180deg);
          font-size: 2em;
          color: var(--primaryColor);
        }
      }
    }
  }
  @media (min-width: 2050px) {
    height: 40vh;
    background: var(--backgroundGradient2S);
  }
  @media (max-width: 1170px) {
    .questions {
      hr {
        width: 97%;
      }
      .row {
        width: 98%;
      }
      .active {
        width: 98%;
      }
    }
  }
  @media (max-width: 955px) {
    .questions {
      .row {
        h2 {
          font-size: 1.4em;
        }
      }
      .active {
        width: 98%;
        height: 70px;
        h2 {
          font-size: 1.4em;
        }
        p {
          line-height: 20px;
        }
      }
    }
  }
  @media (max-width: 870px) {
    background-size: 40% 100%, 100% 140%, 79% 100%;
    .questions {
      .active {
        height: 87px;
      }
    }
  }
  @media (max-width: 730px) {
    .questions {
      .active {
        height: 110px;
      }
    }
  }
  @media (max-width: 680px) {
    .questions {
      .row {
        height: 40px;
        h2 {
          line-height: 24px;
        }
      }
    }
  }
  @media (max-width: 540px) {
    .questions {
      .active {
        height: 110px;
        p {
          line-height: 18px;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .title {
      h1 {
        font-size: 10vw;
      }
    }
    .questions {
      .row {
        height: 50px;
        h2 {
        }
      }
      .active {
        h2 {
          font-size: 1em;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
  @media (max-width: 365px) {
    .questions {
      .row {
        h2 {
          font-size: 3em;
        }
      }
      .active {
        h2 {
          font-size: 1.2em;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;

export default FAQ;
