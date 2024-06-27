import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import maldives from "../../assets/homeAssets/maldives.jpg";
import rome from "../../assets/homeAssets/rome.webp";
import dubai from "../../assets/homeAssets/dubai.jpg";
import santorini from "../../assets/homeAssets/santorini.jpg";
import ksamil from "../../assets/homeAssets/ksamil.jpg";
import { motion, useAnimation, useInView } from "framer-motion";

const PopluarDestinations = () => {
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
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        >
          Popular Destinations
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
        <div className="item">
          <img src={maldives} alt="" />
          <span>
            <h1>MALDIVES</h1>
            <p>
              Exlpore the Maldives, a dreamy paradise with sandy white beaches,
              sparkling blue waters, and colorful coral reefs. Relax in luxury
              resorts, enjoy stunning sunsets, and dive into unforgettable
              underwater adventures!
            </p>
            <div className="tags">
              <p>
                <span>#</span>
                tropicalParadise
              </p>
              <p>
                <span>#</span> crystalClearWaters
              </p>
              <p>
                <span>#</span> waterVillas
              </p>
            </div>
            <button>EXPLORE MALDIVES</button>
          </span>
        </div>
        <div className="item reversed">
          <img src={rome} alt="" />
          <span>
            <h1>
              ROME, <span>Italy</span>
            </h1>
            <p>
              Experience Rome, a city full of history and charm! Wander through
              ancient ruins, enjoy delicious Italian food, and soak in the
              lively atmosphere. Every corner has a story waiting to be
              discovered.
            </p>
            <div className="tags">
              <p>
                <span>#</span>
                historyCharm
              </p>
              <p>
                <span>#</span> TimelessBeauty
              </p>
              <p>
                <span>#</span> richHistory
              </p>
            </div>{" "}
            <button>EXPLORE ROME</button>
          </span>
        </div>
        <div className="item">
          <img src={dubai} alt="" />
          <span>
            <h1>
              DUBAI, <span>UAE</span>
            </h1>
            <p>
              Discover Dubai, a city of endless excitement and luxury! Marvel at
              stunning skyscrapers, shop in world-class malls, and enjoy
              thrilling desert adventures. Every visit promises new and
              unforgettable experiences.
            </p>
            <div className="tags">
              <p>
                <span>#</span>
                stunningSkyscrapers
              </p>
              <p>
                <span>#</span> modernWonders
              </p>
              <p>
                <span>#</span> culturalExperiences
              </p>
            </div>
            <button>EXPLORE DUBAI</button>
          </span>
        </div>
        <div className="item reversed">
          <img src={santorini} alt="" />
          <span>
            <h1>
              SANTORINI, <span>Grecce</span>
            </h1>
            <p>
              Explore Santorini, a breathtaking island with stunning sunsets,
              whitewashed buildings, and crystal-clear waters. Enjoy delicious
              Greek cuisine, relax on unique beaches, and soak in the charming,
              romantic atmosphere.
            </p>
            <div className="tags">
              <p>
                <span>#</span>
                uniqueBeaches
              </p>
              <p>
                <span>#</span> romanticAtmosphere
              </p>
              <p>
                <span>#</span> crystalClearWaters
              </p>
            </div>
            <button>EXPLORE SANTORINI</button>
          </span>
        </div>
        <div className="item">
          <img src={ksamil} alt="" />
          <span>
            <h1>
              KSAMIL, <span>Albania</span>
            </h1>
            <p>
              Visit Ksamil, Albania, a hidden gem with pristine beaches,
              turquoise waters, and cozy islands. Enjoy fresh seafood, explore
              ancient ruins nearby, and relax in this peaceful, beautiful
              getaway.
            </p>
            <div className="tags">
              <p>
                <span>#</span>
                cozyIslands
              </p>
              <p>
                <span>#</span> amazingNature
              </p>
              <p>
                <span>#</span> albanianRivera
              </p>
            </div>
            <button>EXPLORE KSAMIL</button>
          </span>
        </div>
      </div>
      <button>EXPLORE ALL</button>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 0;
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
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6em;
    margin-bottom: 2em;
    .item {
      position: sticky;
      background-color: #ffffffd8;
      backdrop-filter: blur(8px);
      top: 9em;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2em;
      padding: 20px 7%;
      height: 60vh;
      max-height: 500px;
      img {
        width: 45%;
        border-radius: 30px;
        border: 3px solid lightgray;
        box-shadow: 4px 7px 10px 2px #c7c7c7;
      }
      span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
        h1 {
          font-family: "The Seasons";
          letter-spacing: 12px;
          color: var(--primaryColor);
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 300;
          span {
            letter-spacing: 2px;
            color: gray;
          }
        }
        p {
          color: gray;
          line-height: 1.7em;
        }
        .tags {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 0 1.3em;
          p {
            display: flex;
            align-items: center;
            gap: 2px;
            color: var(--primaryColor);
            span {
              color: gray;
            }
          }
        }
        button {
          margin: 0;
          justify-content: flex-start;
          align-self: flex-start;
          background: #ffffff8b;
          &:hover {
            color: #464646;
            border: 1px solid #c5c5c5;
            background: #d4e2f3;
          }
        }
      }
    }
    .reversed {
      flex-direction: row-reverse;
      span {
        text-align: end;
        align-items: flex-end;
        .tags {
          align-self: center;
        }
        button {
          align-self: end;
        }
      }
    }
  }
  button {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    color: #464646;
    font-size: 18px;
    padding: 15px 20px;
    border: 1px solid #c5c5c5;
    font-family: "Montserrat";
    font-weight: 300;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      background: var(--primaryColor);
      color: white;
      border: 1px solid var(--primaryColor);
    }
  }
  @media (max-width: 870px) {
    .items {
      .item {
        display: flex;
        flex-direction: column;
        height: 80vh;
        text-align: center;
        img {
          width: 60%;
        }
        span {
          align-items: center;
        }
      }
      .reversed {
        span {
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .items {
      .item {
        top: 6em;
        img {
          width: 80%;
        }
        span {
          h1 {
            font-size: 7vw;
            letter-spacing: 6px;
          }
        }
      }
    }
  }
`;

export default PopluarDestinations;
