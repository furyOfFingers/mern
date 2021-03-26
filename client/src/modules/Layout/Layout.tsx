import React from "react";
import MainRouter from "router/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default React.memo(Layout);
