import React from "react";
import { createHashHistory } from "history";
import { BrowserRouter, Route } from 'react-router-dom';


import SignupPage from "./component/signup/SignupPage";
import App from "./component/App";

const routes =  (
  <BrowserRouter>
    <div>
        <Route exact path="/" component={ App } />
        <Route path="/signup" component={ SignupPage } />
    </div>
  </BrowserRouter>
);

export default routes;