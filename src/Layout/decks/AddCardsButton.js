import React from "react";
import { Link } from "react-router-dom";

function AddCardsButton({ deckId }) {
    return (
        <>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-secondary" >
            <span className="oi oi-plus" style={{marginRight: "5px"}} />
            Add Cards
        </Link>
        </>
    );
}

export default AddCardsButton;