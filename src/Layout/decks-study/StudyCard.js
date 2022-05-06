import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "animate.css";

function StudyCard({ currentCard, setCurrentCard, cards }) {
    const history = useHistory();
    const [cardNum, setCardNum] = useState(1);
    const [frontOfCard, setFrontOfCard] = useState(true);

    // Handle flip //
    const handleFlip = () => {
        if (frontOfCard) {
            setFrontOfCard(false);
        } else {
            setFrontOfCard(true);
        }
    }
    // Handle next //
    const handleNext = () => {
        if (cardNum < cards.length) {
            setCurrentCard(cards[cardNum]);
            setFrontOfCard(true);
            setCardNum(cardNum + 1);
        } else {
            if (window.confirm("Restart Cards?\n\nClick 'cancel' to return to the home page.")){
                setCurrentCard(cards[0]);
                setFrontOfCard(true);
                setCardNum(1);
            } else {
                history.push("/");
            }
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

export default StudyCard;