import styled from "styled-components";
import { A, Img } from "../../styled";

export const StyledIcon = styled(A)`
  width: 36px;
  height: 36px;
  border: 1px solid #00c6bd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled(Img)`
  width: 16px;
  height: 18px;
  filter: ${(props) => props.theme.imageFilter};
`;
