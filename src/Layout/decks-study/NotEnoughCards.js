import React from "react";
import { useParams } from "react-router-dom"
import AddCardsButton from "../decks/AddCardsButton";

function NotEnoughCards({ cardsNumber }) {
    const deckId = useParams().deckId;

    return (
        <>
            <h2>Not enough cards.</h2>
            <p>You need at least 3 cards to study. There are {cardsNumber} cards in this deck.</p>
            <AddCardsButton deckId={deckId} />
        </>
    );
}

export default NotEnoughCards;