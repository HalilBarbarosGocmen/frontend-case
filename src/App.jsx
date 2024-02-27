import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Best from "./components/Best";
import JoinUs from "./components/JoinUs";
import Review from "./components/Review";
import Collection from "./components/Collection";
import Map from "./components/Map";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Best />
        <JoinUs />
        <Review />
        <Collection />
        <Map />
      </main>
      <Footer />
    </>
  );
};

export default App;
