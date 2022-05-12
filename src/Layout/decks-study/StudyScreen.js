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
            const response = await readDeck(deckId);
            setDeck(response);
            setCards(response.cards);
            setCurrentCard(response.cards[0]);
        }
        loadDeck();
    }, [deckId]);


    // If deck contains more than 2 cards, display StudyCard //
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

            <h1>Study: {deck.name}</h1>
                <StudyCard 
                currentCard={currentCard} 
                setCurrentCard={setCurrentCard} 
                cards={cards} 
                />
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

            <h1>Study: {deck.name}</h1>
            <NotEnoughCards cardsNumber={cards.length} />
        </>
    );
}

export default StudyScreen;