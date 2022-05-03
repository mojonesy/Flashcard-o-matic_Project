import React from "react";
import { Link } from "react-router-dom";

function Deck({ deck }){
    return (
        <div className="card">
            <h5 className="card-header">{deck.name}</h5>
            <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <p className="card-text">{deck.description}</p>
                <Link to="" className="btn btn-primary">Study</Link>
            </div>
        </div>
    )
};

export default Deck;