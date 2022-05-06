import React from "react";
import { useEffect, useState } from "react";
import { readDeck } from "../../utils/api";
import { useParams, Link } from "react-router-dom";
// Components //
import StudyCard from "./StudyCard";
import NotEnoughCards from "./NotEnoughCards";

function StudyScreen() {
    const deckId = useParams().deckId;
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState({})

    // Load deck using deckId, set cards from deck, set current card to view //
    useEffect(() => {
        async function loadDeck() {
            const response = readDeck(deckId);
            const apiResponse = await response;
            setDeck(apiResponse);
            setCards(apiResponse.cards);
            setCurrentCard(apiResponse.cards[0]);
        }
        loadDeck();
    }, [deckId]);


    // If deck contains more than 2 cards, display first card in deck //
    if (cards.length > 2) {
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
                    <li className="breadcrumb-item" style={{color:"teal"}}>{deck.name}</li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>

            <h1>{deck.name}: Study</h1>
                    {/* Display front of card. When Flip button is clicked, display back of card.
                        If Flip button is clicked again, display front of card. If Next button is
                        clicked, display next card in deck. */}
                <StudyCard currentCard={currentCard} setCurrentCard={setCurrentCard} cards={cards} />
            </>
        );
    }
    // If deck contains less than 2 cards, display NotEnoughCards //
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
                    <li className="breadcrumb-item" style={{color:"teal"}}>{deck.name}</li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>

            <h1>{deck.name}: Study</h1>
            <NotEnoughCards cardsNumber={cards.length} />
        </>
    );
}

export default StudyScreen;