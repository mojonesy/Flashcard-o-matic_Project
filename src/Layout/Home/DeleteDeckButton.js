import React from "react";
import { deleteDeck } from "../../utils/api";

function DeleteDeckButton({ deckId }) {
    
    const handleDelete = () => {
        if (window.confirm("Delete this deck?\n\nYou will not be able to recover it.")) {
            deleteDeck(deckId);
            window.location.reload();
        }
    };

    return (
        <button onClick={handleDelete} className="btn btn-danger">
            <span className="oi oi-trash" />
        </button>
    );
}

export default DeleteDeckButton;