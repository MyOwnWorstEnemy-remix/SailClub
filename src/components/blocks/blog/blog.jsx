import React from "react";
import Article from "../../ui/article/article";
import { StyledUl, StyledLi } from "./styles";
import articles from "../../../mocks/articles";

function Blog() {
  return (
    <>
      <StyledUl>
        {articles.map((article) => (
          <StyledLi key={article.id}>
            <Article {...article} />
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
}

export default Blog;
