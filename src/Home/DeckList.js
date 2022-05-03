import React from "react";
import { useState, useEffect } from "react-router-dom"
import { listDecks } from "../utils/api/index";
import Deck from "./Deck";
import NotFound from "../Layout/NotFound";

function DeckList() {
    const [decks, setDecks] = useState([]);

    // Load list of decks
    useEffect(() => {
        setDecks([]); // "Loading..."
        const abortController = new AbortController();
        async function loadDecks() {
            try {
                const response = await(listDecks(abortController.signal));
                const apiResponse = await response.json();
                setDecks(apiResponse);
            } catch (error) {
                if (error.name === "AbortError") {
                    return <NotFound />;
                } else {
                    throw error;
                }
            }
        }
        loadDecks();
        return () => abortController.abort();
    }, []);

    const list = decks.map((deck) => <Deck key={deck.id} deck={deck} /> );

    if (setDecks.length > 0) {
        return (
            <>
                <main className="container">
                    <section className="row">
                        {list}
                    </section>
                </main>
            </>
        );
    }
    return <h2>Loading...</h2>
};

export default DeckList;