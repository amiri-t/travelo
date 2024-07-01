import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

const ContactSection = () => {
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
      <motion.div
        ref={ref}
        className="left"
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{
          duration: 0.7,
          bounce: 0.3,
          delay: 0.4,
          type: "spring",
        }}
      >
        <h1>
          <span>Let's get in touch.</span> Feel free to ask us any questions you
          have :)
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          rem.
        </p>
        <RiInstagramFill className="icon" />
        <FaTiktok className="icon tiktok" />
      </motion.div>
      <motion.form
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.8,
        }}
      >
        <h2>Contact Us</h2>
        <input type="text" name="name" placeholder="Your Full name" required />
        <input
          type="phone"
          name="phoneNumber"
          placeholder="Phone Number"
          required
        />
        <textarea
          cols="20"
          rows="4"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">SUBMIT</button>
      </motion.form>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 8%;
  display: flex;
  justify-content: center;
  gap: 10px;
  font-family: "Montserrat", cursive;
  position: relative;
  .left {
    margin-top: 5%;
    width: 65%;
    z-index: 0;
    h1 {
      font-size: 4.7vw;
      line-height: 1.1em;
      font-weight: 200;
      font-family: "The Seasons", serif;
      color: gray;
      span {
        color: var(--primaryColor);
      }
    }
    p {
      margin-right: 17%;
      color: var(--fontSecondaryColor);
      font-weight: 300;
      margin-top: 1em;
      max-width: 400px;
    }
    .icon {
      font-size: 3em;
      margin-top: 10px;
      color: var(--primaryColor);
    }
    .tiktok {
      font-size: 2.3em;
      margin: 0 0 5px 7px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 700px;
    padding: 2em;
    z-index: 1;
    h2 {
      font-weight: 300;
      text-align: center;
      margin-bottom: 10px;
    }
    input,
    textarea {
      font-family: "Montserrat", cursive;
      padding: 10px;
      font-size: 16px;
      border: none;
      border-bottom: 1px solid #bebebe;
      background: none;
      color: var(--fontPrimaryColor);
      outline: none;
      ::placeholder {
        color: var(--fontSecondaryColor);
      }
    }
    button {
      margin-top: 1em;
      display: flex;
      align-self: flex-start;
      margin: auto;
      padding: 17px;
      font-size: 18px;
      font-family: "Comfortaa", cursive;
      background: none;
      border: 1px solid #acacac;
      color: #575757;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        background: var(--primaryColor);
        box-shadow: 0 0 14px 2px var(--shadowColor);
        color: white;
      }
    }
  }
  @media (max-width: 1300px) {
    padding: 4em 7%;
    .left {
      h1 {
        font-size: 3em;
      }
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    .left {
      width: 100%;
      h1 {
        font-size: 3em;
      }
      p {
        text-align: center;
        margin: auto;
      }
    }
    form {
      width: 90%;
    }
  }
  @media (max-width: 550px) {
    padding: 6em 6% 4em 6%;
    form {
      width: 100%;
      padding: 10px;
    }
    .left {
      h1 {
        font-size: 3em;
      }
    }
  }
`;

export default ContactSection;
