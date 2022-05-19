import React from "react";
import { Link } from "react-router-dom";

function StudyButton({ deckId }) {

    return (
        <Link to={`/decks/${deckId}/study`} className="btn btn-primary">
            <span className="oi oi-book" style={{marginRight:"5px"}} />
            Study
        </Link>
    );
}

export default StudyButton;