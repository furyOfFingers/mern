import React, { memo, FC } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthForm from "pages/AuthForm/AuthForm";
// import WrongUrl from "pages/WrongUrl/WrongUrl";
// import { useSelector } from "react-redux";

const MainRouter: FC = () => {
  // const token: string = useSelector((state: IAppState) => state?.token?.token);

  const isAuthenticated = false;
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/welcome" exact component={() => <div> Welcome</div>} />
        <Redirect to="/welcome" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={AuthForm} />

      <Redirect to="/" />
    </Switch>
  );
};

export default memo(MainRouter);
