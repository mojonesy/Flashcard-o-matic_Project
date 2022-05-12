import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./StudyCard.css";
import FrontStudyCard from "./FrontStudyCard";
import BackStudyCard from "./BackStudyCard";

function StudyCard({ currentCard, setCurrentCard, cards }) {
    const history = useHistory();
    const [cardNum, setCardNum] = useState(1);
    const [frontOfCard, setFrontOfCard] = useState(true);
    const [flipped, setFlipped] = useState("")

    // Handle flip //
    const handleFlip = () => {
        if (frontOfCard) {
            setFrontOfCard(false);
            setFlipped("flipped");
        } else {
            setFrontOfCard(true);
            setFlipped("");
        }
    }
    // Handle next //
    const handleNext = () => {
        if (cardNum < cards.length) {
            setCurrentCard(cards[cardNum]);
            setFrontOfCard(true);
            setFlipped("");
            setCardNum(cardNum + 1);
        } else {
            if (window.confirm("Restart Cards?\n\nClick 'cancel' to return to the home page.")){
                setCurrentCard(cards[0]);
                setFrontOfCard(true);
                setFlipped("");
                setCardNum(1);
            } else {
                history.push("/");
            }
        }
    }


    return (
        <div className="cardView">
        <div className={flipped}>
            <div className="front">
                <FrontStudyCard 
                cardNum={cardNum} 
                cards={cards} 
                currentCard={currentCard} 
                handleFlip={handleFlip}
                />
            </div>
            <div className="back">
                <BackStudyCard
                cardNum={cardNum} 
                cards={cards} 
                currentCard={currentCard} 
                handleFlip={handleFlip}
                handleNext={handleNext}
                />
            </div>
        </div>
        </div>
    );
}

export default StudyCard;