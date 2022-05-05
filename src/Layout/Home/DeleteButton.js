import React from "react";
import { deleteDeck } from "../../utils/api";

function DeleteButton({ deckId }) {
    // TODO: implement window.confirm //
    const handleDelete = () => {
        if (window.confirm("Delete this "))
    }

    return (
        <button onClick={} className="btn btn-danger">
            <span className="oi oi-trash" />
        </button>
    )
}

export default DeleteButton;