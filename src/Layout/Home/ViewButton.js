import React from "react";
import { Link } from "react-router-dom";

function ViewButton({ deckId }) { 

    return (
        <Link to={`/decks/${deckId}`} className="btn btn-secondary">
            <span className="oi oi-eye" style={{marginRight:"5px"}} />
            View
        </Link>
    );
}

export default ViewButton;