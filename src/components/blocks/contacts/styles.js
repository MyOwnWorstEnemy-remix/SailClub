import styled from "styled-components";
import Title from "../../ui/title/title";
import { Img, Ul, Li } from "../../styled";

export const Section = styled.section`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 120px;
`;

export const Content = styled.div`
  width: 400px;
  margin: 0;
  margin-top: 50px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 35px;
`;

export const StyledImg = styled(Img)`
  width: 670px;
  margin-right: 100px;
`;

export const StyledLi = styled(Li)`
  font-size: 16px;
  line-height: 22px;
  display: flex;
  margin-bottom: 15px;
`;

export const ContactName = styled.h3`
  margin: 0;
  margin-right: 10px;
`;

export const StyledText = styled.p`
  margin: 0;
`;

export const SocialList = styled(Ul)`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
