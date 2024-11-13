import styled from "styled-components";
import { Img } from "../../styled";
import Title from "../title/title";

export const ArticleContent = styled.div`
  width: 400px;
`;

export const Date = styled.p`
  margin: 0;
  margin-bottom: 10px;

  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const ArticleTitle = styled(Title)`
  margin-bottom: 35px;
`;

export const ArticleImg = styled(Img)`
  width: 600px;
`;
