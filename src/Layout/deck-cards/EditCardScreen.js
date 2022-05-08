import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../utils/api/index";
import CardForm from "./CardForm";

function EditCardScreen() {
    const history = useHistory();
    const cardId = useParams().cardId;
    const deckId = useParams().deckId;

    // Obtain deck from deckId //
    const [deck, setDeck] = useState("");
    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId);
            setDeck(response);
        }
        loadDeck();
    }, [deckId]);
    
    // Obtain card from cardId //
    const [card, setCard] = useState("");
    useEffect(() => {
        async function loadCard() {
            const response = await readCard(cardId);
            setCard(response);
        }
        loadCard();
    }, [cardId]);


    // Input change handler //
    const handleChange = ({ target }) => {
        setCard({ ...card, [target.name]: target.value});
    };

    // Handle Submit, updateCard() //
    const handleSubmit = (event) => {
        event.preventDefault();
        updateCard(card);
        history.push(`/decks/${deckId}`);
    };


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
                <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
            </ol>
        </nav>

        <h1>Edit Card</h1>

            <CardForm 
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                deckId={deckId}
                placeholderFront={card.front}
                placeholderBack={card.back}
                valueFront={card.front}
                valueBack={card.back}
                secondaryButton="Cancel"
                primaryButton="Save"
            />
        </>
    );
}

export default EditCardScreen;