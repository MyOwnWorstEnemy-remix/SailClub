import styled from "styled-components";

const A = styled.a`
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;

  &: hover {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.3;
  }
`;

export default A;
