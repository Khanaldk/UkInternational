import React from "react";
import Navbar from "../CommonUI/Navbar";
import Placementherosection from "../Components/Placementpages/Placementherosection";
import Placements from "../Components/Homepages/Placements";
import Footer from "../Components/Homepages/Footer";
import PlacementsAll from "../Components/Placementpages/PlacementsAll";

const Placementpages = () => {
  return (
    <section>
      <Navbar />
      <Placementherosection />
      <PlacementsAll />
      <Footer />
    </section>
  );
};

export default Placementpages;
