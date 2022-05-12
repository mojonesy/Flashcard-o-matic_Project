import React from "react";

function BackStudyCard({ cardNum, cards, currentCard, handleFlip, handleNext }) {
    return (
        <>
        <div className="card">
         <div className="card-body">
            <h5 className="card-title">Card {cardNum} of {cards.length}</h5>
            <p className="card-text">{currentCard.back}</p>
            <button 
                className="btn btn-secondary"
                style={{marginRight:"10px"}}
                onClick={handleFlip}
                >
                Flip
            </button>
            <button
                className="btn btn-success"
                style={{backgroundColor:"teal"}}
                onClick={handleNext}
                >
                Next
            </button>
         </div>
        </div>
        </>
    );
}

export default BackStudyCard;