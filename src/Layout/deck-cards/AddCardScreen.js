import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api/index";
import CardForm from "./CardForm";

function AddCardScreen() {
    const deckId = useParams().deckId;
    const [deck, setDeck] = useState("");

    // Card form //
    const initialFormState = {
        front: "",
        back: ""
    };
    const [cardData, setCardData] = useState({ ...initialFormState });

    // Retrieve deck with deckId and set deckName //
    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId);
            setDeck(response);
        }
        loadDeck();
    }, [deckId]);

    // Input change handler //
    const handleChange = ({ target }) => {
        setCardData({ ...cardData, [target.name]: target.value});
    };
    // Handle submit, createCard() //
    const handleSubmit = (event) => {
        event.preventDefault();

        const abortController = new AbortController();
        async function newCard(){
            try {
                const response = await createCard(deckId, cardData, abortController.signal);
                console.log(response);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Aborted");
                } else {
                    throw error;
                }
            }
        }
        newCard();
        setCardData({ ...initialFormState });
    };


    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/" style={{color:"teal"}}>
                        <span className="oi oi-home" style={{marginRight: "5px", color:"teal"}} />
                        Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page" style={{color:"teal"}}>{deck.name}</li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>

            <h1>{deck.name}: Add Card</h1>

                <CardForm 
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    deckId={deckId}
                    placeholderFront="Front side of card"
                    placeholderBack="Back side of card"
                    valueFront={cardData.front}
                    valueBack={cardData.back}
                    secondaryButton="Done"
                    primaryButton="Save"
                />
        </>
    );

}

export default AddCardScreen;