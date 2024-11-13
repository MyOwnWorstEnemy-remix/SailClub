import styled from "styled-components";
import pin from "../../../assets/pin.svg";

export const Section = styled.section`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(22, 49, 82, 0.1);
`;

export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
`;

export const Location = styled.a`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 25px;
  margin-right: auto;
  font-size: 14px;
  line-height: 14px;
  color: inherit;
  text-decoration: none;
  background-image: url("${pin}");
  background-repeat: no-repeat;
  background-position: left center;
`;

const Button = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: transparent;
  border: 1px solid #00c6bd;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;

export const ThemeButton = styled(Button)`
  background-color: ${(props) => props.theme.buttonBackground};
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 30px;
  background-image: url("${(props) => props.theme.iconSrc}");
`;

export const FontButton = styled(Button)`
  color: ${(props) => props.theme.fontColor};
  font-family: ${(props)=> props.theme.fontFamily};
  font-size: ${(props)=> props.theme.fontSizeDefault};
  line-height: 14px;
`;