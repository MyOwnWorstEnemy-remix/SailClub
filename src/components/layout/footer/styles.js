import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-bottom: 60px;
`;

export const Copyright = styled.div`
  margin-left: auto;
`;
