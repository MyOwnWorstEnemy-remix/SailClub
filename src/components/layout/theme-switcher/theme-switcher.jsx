import React, { useContext } from "react";
import { Section, SectionContent, Location, ThemeButton, FontButton } from "./styles";
import { ThemeContext } from "../../../thems/theme-context";

function ThemeSwitcher(){
    const {theme, setTheme, font, setFont} = useContext(ThemeContext);

    const switchTheme = () => {
        return theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const switchFont = () => {
        return font === "default" ? setFont("secondary") : setFont("default");
    };
    return(
    <Section>
        <SectionContent>
            <Location href="/">Сочи</Location>
            <ThemeButton onClick={switchTheme}/>
            <FontButton onClick={switchFont}>A</FontButton>
        </SectionContent>
    </Section>
    );
}

export default ThemeSwitcher;