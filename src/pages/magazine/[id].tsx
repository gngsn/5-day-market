import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import ContextProvider from "../../components/base/Layout";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer, { RootState } from "../../modules";
import Magazine from "../../components/home/Magazine";

declare global {
  interface Window {
    __REDUX_STATE__: RootState;
  }
}

const store = createStore(
  rootReducer,
  window.__REDUX_STATE__,
  composeWithDevTools(),
);

const IndexPage = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <Magazine />
      </ContextProvider>
    </Provider>
  )
}

export default IndexPage;
