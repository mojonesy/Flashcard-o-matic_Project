import React from "react";
import { Switch, Route } from "react-router-dom";
// Components //
import AddCardScreen from "./deck-cards/AddCardScreen";
import CreateDeckScreen from "./decks-create/CreateDeckScreen";
import DeckScreen from "./decks/DeckScreen";
import EditDeckScreen from "./decks-edit/EditDeckScreen";
import EditCardScreen from "./deck-cards/EditCardScreen";
import HomeScreen from "./Home/HomeScreen";
import Header from "./Header";
import NotFound from "./NotFound";
import Study from "./decks-study/StudyScreen";


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>

          <Route path="/decks/new">
            <CreateDeckScreen />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCardScreen />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCardScreen />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeckScreen />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId">
            <DeckScreen />
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
