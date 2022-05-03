import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import DeckList from "./DeckList";
import Deck from "./Deck";

function Home() {

    return (
      <>
        <Link to="/decks/new" className="btn btn-secondary btn-lg">
            Create Deck
        </Link>
        <Switch>
            <Route exact path="/">
                <DeckList />
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