import React from "react";
import styled from "styled-components";
import serviceImg from "../../assets/homeAssets/servicesImg.png";

const Services = () => {
  return (
    <Container>
      <div className="left">
        <h1>What services we provide</h1>
        <div>
          <span>
            <h2>Travel Plan</h2>
            <p>
              Travel plane are not really an instruemnt themselves but a
              delivery mechanism or strategy for other mostly
            </p>
          </span>
          <span>
            <h2>Flight Booking</h2>
            <p>
              Discover your next destination. Find deals on domestic and
              international flights.
            </p>
          </span>
          <span>
            <h2>Accommodation</h2>
            <p>
              Looking for the best hotels with great deals? No need to look
              further, we got you back in this one too
            </p>
          </span>
        </div>
      </div>
      <img src={serviceImg} alt="" />
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
