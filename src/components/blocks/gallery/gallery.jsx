import React from "react";
import ImageGallery from "react-image-gallery";
import { images } from "../../../mocks/gallery-images";
import "react-image-gallery/styles/css/image-gallery.css";
import { Section, StyledTitle } from "./styles";
import { TitleSize } from "../../ui/title/title";

function Gallery() {
    return (
    <Section>
        <StyledTitle size={TitleSize.MEDIUM}>Галерея</StyledTitle>
        <ImageGallery items={images} thumbnailPosition="right" showNav={false} showPlayButton={false} showFullscreenButton={false}/>
    </Section>);
}

export default Gallery;