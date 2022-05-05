import React from "react";
import { Link } from "react-router-dom";

function StudyButton() {
    // TODO: retrieve deckId //

    return (
        <Link to="" className="btn btn-primary">
            <span className="oi oi-book" style={{marginRight:"5px"}} />
            Study
        </Link>
    );
}

export default StudyButton;