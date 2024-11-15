import React from "react";
import Blog from "../../blocks/blog/blog";
import Hero from "../../blocks/hero/hero";
import Services from "../../blocks/services/services";
import Gallery from "../../blocks/gallery/gallery";
import News from "../../blocks/news/news";
import Contacts from "../../blocks/contacts/contacts";
import Footer from "../../layout/footer/footer";

function MainPage() {
  return (
    <>
      <Hero />
      <Blog />
      <Services />
      <Gallery />
      <News />
      <Contacts />
      <Footer />
    </>
  );
}

export default MainPage;
