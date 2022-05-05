import React from "react";
import { Link } from "react-router-dom";
import { useParams } from  "react-router-dom";

function DeckScreen() {
    const deckId = useParams().deckId;

    

    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">
                    <span className="oi oi-home" style={{marginRight: "5px"}} />
                    Deck Name
                    </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
            </ol>
        </nav>

        </>
    );
};

export default DeckScreen;