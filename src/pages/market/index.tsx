import * as React from "react";
import { PageProps } from "gatsby";

import ContextProvider from "../../components/base/Layout";
import Market from "../../components/market/MarketPage";

interface IProps extends PageProps {
  // id: string;
}

const IndexPage = ({  }: IProps) => {
  return (
    <ContextProvider>
      <Market />
    </ContextProvider>
  )
}

export default IndexPage;
