import React from "react";
import { useState, useEffect } from "react";
import { listDecks } from "../../utils/api/index";
import "./HomeScreen.css";
// Components //
import CreateDeckButton from "./CreateDeckButton";
import StudyButton from "./StudyButton";
import ViewButton from "./ViewButton";
import DeleteDeckButton from "./DeleteDeckButton";


function Home() {

    const [decks, setDecks] = useState([]);

    // Load list of decks //
    useEffect(() => {
        async function loadDecks() {
            const response = await listDecks();
            setDecks(response);
        }
        loadDecks();
    }, []);


    // Displaying CreateDeckButton and mapping each deck as a Bootstrap card //
    return (
        <div id="home">
            <CreateDeckButton />
            
            <div id="deckList">
                {decks.map((deck) => {
                return (
                    <div key={deck.id} className="card">
                        <h5 className="card-header">{deck.name}</h5>
                        <div className="card-body">
                            <h6 className="card-title">{deck.cards.length} cards</h6>
                            <p className="card-text">{deck.description}</p>
                            <div className="d-flex">
                              <div className="pr-2"><ViewButton deckId={deck.id} /></div>
                              <div><StudyButton deckId={deck.id} /></div>
                              <div className="ml-auto"><DeleteDeckButton deckId={deck.id} /></div>
                            </div>
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    );
}

export default Home;