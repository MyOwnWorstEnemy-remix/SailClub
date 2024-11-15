import React from "react";
import { StyledA } from "./styles";

function SocialIcon(
    name,
    src,
    width,
    height
) {
    return (
        <>
            <StyledA>
                <img src={src} width={width} height={height} alt={name} />
            </StyledA>
        </>
    );
}

export default SocialIcon;