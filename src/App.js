import React from "react";
import {
  Hero,
  Nav,
  Offers,
  Gallery,
  BrandMessage,
  ImageSlider,
  FooterNav,
} from "./components";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Offers />
      <Gallery />
      <BrandMessage />
      <ImageSlider />
      <FooterNav />
    </div>
  );
}

export default App;
