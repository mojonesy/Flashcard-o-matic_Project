import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function EditCardButton({ cardId }) {
    const { url } = useRouteMatch();

    return (
        <>
        <Link to={`${url}/cards/${cardId}/edit`} className="btn btn-secondary">
            <span className="oi oi-pencil" style={{marginRight:"5px"}}/>
            Edit
        </Link>
        </>
    );
}

export default EditCardButton;