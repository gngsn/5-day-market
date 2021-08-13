import * as React from "react";

import ContextProvider from "../../components/base/Layout";
import Market from "../../components/market/MarketPage";

const IndexPage = () => {
  return (
      <ContextProvider>
        <Market />
      </ContextProvider>
  )
}

export default IndexPage;
