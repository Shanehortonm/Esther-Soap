import React from "react";
import {
  Hero,
  Nav,
  Offers,
  Gallery,
  BrandMessage,
  ImageSlider,
  FooterForm,
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
      <FooterForm />
      <Footer />
    </div>
  );
}

export default App;
