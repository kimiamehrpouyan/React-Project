import React from "react";
import Hero from "../Hero.jsx";
import Slider from "../Slider";
import Virtual from "../Virtual";
import Products from "../Products";
import Testimonials from "../Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
    </>
  );
}
