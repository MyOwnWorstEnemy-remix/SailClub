import styled from "styled-components";
import Title from "../../ui/title/title";
import { Img, P, Ul, Li } from "../../styled";

export const Section = styled.section`
  width: 770px;
  margin: 0 auto;
  margin-bottom: 120px;
  font-size: 18px;
  line-height: 26px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 55px;
  text-align: center;
`;

export const StyledImg = styled(Img)`
  width: 770px;
  height: 301px;
  margin-bottom: 17px;
`;

export const Caption = styled(P)`
  font-size: 16px;
  line-height: 19px;
  color: #8693a4;
  margin-bottom: 33px;
`;

export const NewsTitle = styled(Title)`
  margin-top: 33px;
  margin-bottom: 27px;
`;

export const NewsSubtitle = styled(Title)`
  margin-top: 24px;
  margin-bottom: 15px;
`;

export const Text = styled(P)`
  margin: 12px 0;
`;

export const StyledUl = styled(Ul)`
  margin-top: 15px;
  margin-bottom: 30px;
  margin-left: 19px;
`;

export const StyledLi = styled(Li)`
  margin-bottom: 8px;
`;

export const Blockquote = styled.blockquote`
  padding: 0 20px;
  margin: 0;
  margin-top: 38px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 26px;
  line-height: 36px;
  border-left: 2px solid #00c6bd;
`