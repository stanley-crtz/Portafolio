import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AboutMe from "../Pages/AboutMe";
import Home from "../Pages/Home";

export const Rutes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/Portafolio/" component={() => (
        <Redirect to="/Portafolio/Home" />
      )} />
      <Route exact path="/Portafolio/Home" component={Home}/>
      <Route exact path="/Portafolio/About_Me" component={AboutMe} />
    </Switch>
    <Footer />
  </BrowserRouter>
)
