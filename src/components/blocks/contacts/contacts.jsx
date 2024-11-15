import React from "react";
import { Section, StyledTitle, StyledImg, Content, StyledLi, ContactName, StyledText, SocialList } from "./styles";
import { Ul, Li, A } from "../../styled";
import { TitleSize } from "../../ui/title/title";
import SocialIcon from "../../ui/social-icon/social-icon";
import contacts from "../../../mocks/contacts";
import socials from "../../../mocks/socials";
import map from "../../../assets/map.png";

function Contacts() {
    return (
        <Section>
            <Content>
                <StyledTitle size={TitleSize.MEDIUM}>Контакты</StyledTitle>
                <Ul>
                    {contacts.map((contact) => (
                    <StyledLi key={contact.id}>
                        <ContactName>{contact.title}:</ContactName>
                        {(contact.isLink) ? <A href={contact.link}>{contact.text}</A> : <StyledText>{contact.text}</StyledText>}
                    </StyledLi>
                    ))}
                </Ul>
                <ContactName>Мы в социальных сетях:</ContactName>
                <SocialList>
                    {socials.map((socialItem) => (
                    <Li key={socialItem.id}>
                        <SocialIcon {...socialItem} />
                    </Li>
                    ))}
                </SocialList>
            </Content>
            <StyledImg src={map} alt="Карта с адресами"></StyledImg>
        </Section>
    );
};

export default Contacts;