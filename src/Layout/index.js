import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./Home/Header";
import NotFound from "./Home/NotFound";
import Home from "./Home/Home";
import CreateDeck from "./Deck/CreateDeck";
import StudyDeck from "./Deck/StudyDeck";
import DeckView from "./Deck/DeckView";
import EditDeck from "./Deck/EditDeck";
import NewCard from "./Card/NewCard";
import EditCard from "./Card/EditCard";
import Breadcrumb from "./Home/Breadcrumb"

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck/>
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckView/>
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck/>
          </Route>
          <Route exact path="/decks/:deckId/study">
            <StudyDeck/>
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <NewCard/>
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;