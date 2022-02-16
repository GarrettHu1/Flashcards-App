import React from "react";
import { Switch, Route } from "react-router-dom";
import { Fragment } from "react";

import Header from "./Header";
import NotFound from "./NotFound";
import HomePage from "../Home/HomePage";
import CreateDeck from "../Decks/CreateDeck"
import CardList from "../Cards/CardList"
import CreateCard from "../Cards/CreateCard"
import Breadcrumb from "./Breadcrumb"


function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Route>
          <Breadcrumb />
        </Route>
        <Switch>
        <Route exact path="/">
        <HomePage />
        </Route>
        <Route exact path={"/decks/new"}>
        <CreateDeck />
        </Route>
          <Route exact path={"/decks/:deckId/cards/new"}>
        <CreateCard />
        </Route>
          <Route exact path ={"/decks/:deckId/cards"}>
          <CardList />
          </Route>
        <Route>
        <NotFound />
        </Route>
        </Switch>
      </div>
      </Fragment>
  );
}

export default Layout;
