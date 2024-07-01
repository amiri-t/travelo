import React from "react";
import styled from "styled-components";
import Banner from "../components/homeComponents/Banner";
import Stats from "../components/homeComponents/Stats";
import SearchSection from "../components/homeComponents/SearchSection";
import PopularDestinations from "../components/homeComponents/PopluarDestinations";
import ThemeTours from "../components/homeComponents/ThemeTours";
import Services from "../components/homeComponents/Services";
import FAQ from "../components/homeComponents/FAQ";
import ContactSection from "../components/homeComponents/ContactSection";
import OfferOfTheWeek from "../components/homeComponents/OfferOfTheWeek";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Stats />
      <SearchSection />
      {/* Offer of the week section */}
      <PopularDestinations />
      <Services />
      <ThemeTours />
      <OfferOfTheWeek />
      <FAQ />
      <ContactSection />
    </Container>
  );
};
const Container = styled.div`
  padding: 0;
  /* overflow-x: hidden; */
`;

export default Home;
