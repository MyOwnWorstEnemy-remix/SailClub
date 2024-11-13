import styled, { css } from "styled-components";

export const TitleSize = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
  TINY: "tiny",
};

const TitleSizeValue = {
  [TitleSize.BIG]: {
    fontSize: "44px",
    lineHeight: "60px",
  },
  [TitleSize.MEDIUM]: {
    fontSize: "24px",
    lineHeight: "34px",
  },
  [TitleSize.SMALL]: {
    fontSize: "22px",
    lineHeight: "26px",
  },
  [TitleSize.TINY]: {
    fontSize: "20px",
    lineHeight: "26px",
  },
};

// Заголовок
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  ${(props) => {
    const values = TitleSizeValue[props.size || TitleSize.MEDIUM];
    return css`
      font-size: ${values.fontSize};
      line-height: ${values.lineHeight};
    `;
  }};
  ${(props) => {
    return props.size === TitleSize.MEDIUM
      ? css`
          text-decoration: underline;
          text-decoration-color: #00c6bd;
          text-decoration-thickness: 2px;
          text-underline-offset: 15px;
          text-underline-position: under;
        `
      : null;
  }}
`;

export default Title;
