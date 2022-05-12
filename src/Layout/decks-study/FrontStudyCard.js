import React from "react";

function FrontStudyCard({ cardNum, cards, currentCard, handleFlip }) {
    return (
        <>
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Card {cardNum} of {cards.length}</h5>
            <p className="card-text">{currentCard.front}</p>
            <button 
                className="btn btn-secondary"
                onClick={handleFlip}
                >
                Flip
            </button>
        </div>
        </div>
        </>
    );
}

export default FrontStudyCard;