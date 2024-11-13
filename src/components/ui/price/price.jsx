import React from "react";
import { P } from "../../styled"
import { PriceBlock } from "./styles"

function Price({price}) {
  return(
    <PriceBlock>
      <P>Цена</P>
      <P>{price} ₽/час</P>
    </PriceBlock>
  )
}

export default Price;