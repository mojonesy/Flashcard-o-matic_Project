import React from "react";
import { useState, useEffect } from "react";
import { readDeck } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
// Components //
import EditDeckButton from "./EditDeckButton";
import EditCardButton from "./EditCardButton";
import StudyButton from "../Home/StudyButton";
import AddCardsButton from "./AddCardsButton";
import DeleteButton from "../Home/DeleteButton";

function DeckScreen() {
    const deckId = useParams().deckId;
    const [deck, setDeck] = useState([]);
    const [cards, setCards] = useState([]);

    // Load deck using deckId //
    useEffect(() => {
        const abortController = new AbortController();
        async function loadDeck() {
            try {
                const response = await readDeck(deckId, abortController.signal);
                setDeck(response);
                setCards(deck.cards);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Aborted");
                } else {
                    throw error;
                }
            }
        }
        loadDeck();
        return () => abortController.abort();
    }, []);
    

    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/" style={{color:"teal"}}>
                    <span className="oi oi-home" style={{marginRight: "5px"}} />
                    Home
                    </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
            </ol>
        </nav>

        <h4>{deck.name}</h4>
        <p>{deck.description}</p>
        <div className="container d-flex px-0">
          <div className="pr-2"><EditDeckButton deckId={deck.id} /></div>
          <div className="pr-2"><StudyButton /></div>
          <div><AddCardsButton deckId={deck.id} /></div>
          <div className="ml-auto"><DeleteButton /></div>
        </div>

        <h2 style={{marginTop:"25px"}}>Cards</h2>
        {/* Map cards in deck to display as Bootstrap cards */}
        <div id="cardList">
            {cards.map((card) => {
                return (
                    <div key={card.id} className="card">
                        <div className="card-body">
                         <div className="row">
                            <div className="col">
                                <h6>Question</h6>
                                <p className="card-text">{card.front}</p>
                            </div>
                            <div className="col">
                                <h6>Answer</h6>
                                <p className="card-text">{card.back}</p>
                                <div className="d-flex" style={{justifyContent:"right"}}>
                                  <div className="pr-2">
                                    <EditCardButton />
                                  </div>
                                  <div>
                                    <DeleteButton />
                                  </div>
                                </div>
                            </div>
                         </div>
                        </div>
                    </div>
                );
            })}
        </div>
        </>
    );
};

export default DeckScreen;