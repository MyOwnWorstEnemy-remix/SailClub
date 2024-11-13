import React from "react";
import { TitleSize } from "../../ui/title/title";
import { HeroTitle, HeroSection } from "./styles";
import heroImg from "../../../assets/hero-photo.jpg";

function Hero() {
  return (
    <>
      <HeroSection>
        <HeroTitle size={TitleSize.BIG}>Вместе под парусом</HeroTitle>
        <img src={heroImg} alt="Наша яхта" />
      </HeroSection>
    </>
  );
}

export default Hero;
