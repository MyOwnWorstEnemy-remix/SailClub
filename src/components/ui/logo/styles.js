import styled from "styled-components";

export const StyledLogo = styled.a`
  width: 64px;
  height: 68px;
  margin: 0;
  margin-right: auto;
  text-decoration: none;
  filter: ${(props) => props.theme.imageFilter};

  &: hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;
