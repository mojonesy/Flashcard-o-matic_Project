import React from "react";
import { Link } from "react-router-dom";

function EditDeckButton({ deckId }) {
    return (
        <>
        <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary" >
            <span className="oi oi-pencil" style={{marginRight: "5px"}} />
            Edit
        </Link>
        </>
    );
}

export default EditDeckButton;