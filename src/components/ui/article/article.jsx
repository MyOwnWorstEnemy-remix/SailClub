import React from "react";
import { TitleSize } from "../title/title";
import { P } from "../../styled";
import { ArticleContent, Date, ArticleTitle, ArticleImg } from "./styles";

function Article({
  beginDate,
  beginDateTime,
  endDate,
  endDateTime,
  title,
  text,
  src,
}) {
  return (
    <>
      <ArticleContent>
        <Date>
          <time dateTime={beginDateTime}>{beginDate}</time> -{" "}
          <time dateTime={endDateTime}>{endDate}</time>
        </Date>
        <ArticleTitle size={TitleSize.MEDIUM}>{title}</ArticleTitle>
        <P>{text}</P>
      </ArticleContent>
      <ArticleImg src={src} />
    </>
  );
}

export default Article;
