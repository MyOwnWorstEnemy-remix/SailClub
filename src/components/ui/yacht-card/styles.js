import styled from "styled-components";
import { Title } from "../title/title";
import { Img, P, Ul, Li } from "../../styled";

export const Card = styled.article`
  width: 310px;
  padding: 30px;
  margin: 0;

  font-size: 14px;
  background: ${(props => props.theme.backgroundColor)};
  box-shadow: ${(props) => props.theme.cardShadow};

  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled(Title)`
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  margin-bottom: 18px;
`;

export const StyledImg = styled(Img)`
  margin-bottom: 21px;
  width: 310px;
  order: -1;
`;

export const Text = styled(P)`
  margin-bottom: 15px;
`;

export const StyledUl = styled(Ul)`
  line-height: 19px;
  list-style: outside;
  margin-bottom: 25px;
`;

export const StyledLi = styled(Li)`
  margin-bottom: 4px;
  margin-left: 18px;
`;