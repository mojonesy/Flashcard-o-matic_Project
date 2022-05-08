import React from "react";
import { deleteCard } from "../../utils/api/index";

function DeleteCardButton({ cardId }) {
    const handleDelete = () => {
        if (window.confirm("Delete this card?\n\nYou will not be able to recover it.")) {
            deleteCard(cardId);
            window.location.reload();
        }
    };

    return (
        <button onClick={handleDelete} className="btn btn-danger">
            <span className="oi oi-trash" />
        </button>
    );
}

export default DeleteCardButton;