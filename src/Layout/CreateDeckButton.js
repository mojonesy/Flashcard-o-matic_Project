import React from "react";
import { Link } from "react-router-dom";

function CreateDeckButton() {
    return (
        <>
        <Link to="/decks/new" className="btn btn-secondary btn-lg">
            <span className="oi oi-plus" style={{marginRight: "5px"}} />
            Create Deck
        </Link>
        </>
    );
};

export default CreateDeckButton;