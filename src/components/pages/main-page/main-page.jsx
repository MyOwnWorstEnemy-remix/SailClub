import React from "react";
import Blog from "../../blocks/blog/blog";
import Hero from "../../blocks/hero/hero";
import Services from "../../blocks/services/services";
import Gallery from "../../blocks/gallery/gallery";
import News from "../../blocks/news/news";

function MainPage() {
  return (
    <>
      <Hero />
      <Blog />
      <Services />
      <Gallery />
      <News />
    </>
  );
}

export default MainPage;
