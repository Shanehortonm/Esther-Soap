import React from "react";
import {
  Hero,
  Nav,
  Offers,
  Gallery,
  BrandMessage,
  ImageSlider,
  Footer,
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
      <Footer />
    </div>
  );
}

export default App;
