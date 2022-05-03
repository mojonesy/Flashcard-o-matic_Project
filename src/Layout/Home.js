import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import CreateDeck from "./decks-create/CreateDeck";
import DeckList from "./decks/DeckList";
import Deck from "./decks/Deck";

function Home() {

    return (
      <>
        <Switch>
            <Route exact path="/">
                <DeckList />
            </Route>

            <Route path="/decks/new">
                <CreateDeck />
            </Route>

            <Route path="/decks/:deckId">
                <Deck />
            </Route>
        </Switch>
      </>
    );
}

export default Home;

// This component shows at url '/' //