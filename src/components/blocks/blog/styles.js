import styled from "styled-components";
import { Ul, Li } from "../../styled";

export const StyledUl = styled(Ul)`
  margin-bottom: 120px;
`;

export const StyledLi = styled(Li)`
  width: 1030px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
`;
