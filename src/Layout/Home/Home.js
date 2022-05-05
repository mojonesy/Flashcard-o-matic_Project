import React from "react";
import { useState, useEffect } from "react";
import { listDecks } from "../../utils/api/index";
import "./Home.css";
// Components //
import CreateDeckButton from "./CreateDeckButton";
import StudyButton from "./StudyButton";
import ViewButton from "./ViewButton";
import DeleteButton from "./DeleteButton";


function Home() {

    const [decks, setDecks] = useState([]);

    // Load list of decks //
    useEffect(() => {
        const abortController = new AbortController();
        async function loadDecks() {
            try {
                const response = await listDecks(abortController.signal);
                setDecks(response);
            } catch (error){
                if (error.name === "AbortError") {
                    console.log(error);
                } else {
                    throw error;
                }
            }
        }
        loadDecks();
        return () => abortController.abort();
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
                            <div className="container">
                             <div className="row">
                                <div className="col-2" style={{padding:"0px"}}>
                                    <ViewButton />
                                </div>
                                <div className="col" style={{padding:"0px"}}>
                                    <StudyButton />
                                </div>
                                <div className="col-2" style={{padding:"0px"}}>
                                    <DeleteButton />
                                </div>
                             </div>
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