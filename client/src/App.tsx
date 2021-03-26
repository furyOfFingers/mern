import React from "react";
import Layout from "modules/Layout/Layout";

import { Provider } from "react-redux";
import store from "./store/store";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
