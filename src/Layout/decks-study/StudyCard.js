import React from "react";
import { useState } from "react";

function StudyCard({ currentCard, setCurrentCard, cards }) {
    const [cardNum, setCardNum] = useState(1);
    const [frontOfCard, setFrontOfCard] = useState(true);

    const handleFlip = () => {
        if (frontOfCard) {
            setFrontOfCard(false);
        } else {
            setFrontOfCard(true);
        }
    }


    if (frontOfCard) {
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
    return (
        <>
        <div className="card">
         <div className="card-body">
            <h5 className="card-title">Card {cardNum} of {cards.length}</h5>
            <p className="card-text">{currentCard.back}</p>
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

export default StudyCard;