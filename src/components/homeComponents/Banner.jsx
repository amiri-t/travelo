import React from "react";
import styled from "styled-components";
import bannerImg1 from "../../assets/homeAssets/bannerImg1.png";
import bannerImg2 from "../../assets/homeAssets/bannerImg2.png";
import bannerImg3 from "../../assets/homeAssets/bannerImg3.png";
import bgElement from "../../assets/homeAssets/bgElement.png";

const Banner = () => {
  return (
    <Container>
      <img className="bgElement" src={bgElement} alt="" />
      <div className="row1">
        <h1>Explore</h1>
        <img src={bannerImg1} alt="" />
      </div>
      <div className="row2">
        <img src={bannerImg2} alt="" />
        <h1>The World.</h1>
      </div>
      <div className="row3">
        <h1>Feel</h1>
        <img src={bannerImg3} alt="" />
        <h1>Alive</h1>
      </div>
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
`;

export default Banner;
