import React from "react";
import styled from "styled-components";
import Banner from "../components/homeComponents/Banner";

const Home = () => {
  return (
    <Container>
      <Banner />
    </Container>
  );
};
const Container = styled.div`
  padding: 0;
  overflow-x: hidden;
`;

export default Home;
