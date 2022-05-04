import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api/index";

function AddCardScreen() {
    const history = useHistory();
    const deckId = useParams().deckId;
    const [deck, setDeck] = useState("");
    const [cardData, setCardData] = useState({ ...initialFormState });
    const initialFormState = {
        front: "",
        back: ""
    };

    // Retrieve deck with deckId and set deckName //
    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId);
            const apiResponse = await response.json();
            setDeck(apiResponse);
        }
        loadDeck();
    }, []);

    // Input change handler //
    const handleChange = ({ target }) => {
        setCardData({ ...cardData, [target.name]: target.value});
    };

    // Handle submit, createCard() //
    const handleSubmit = (event) => {
        event.preventDefault();

        const abortController = new AbortController();
        async function newCard(){
            try {
                const response = await createCard(deckId, cardData, abortController.signal);
                const apiResponse = await response.json();
                console.log(apiResponse);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Aborted");
                } else {
                    throw error;
                }
            }
        }
        newCard();

        setCardData({ ...initialFormState });
    };


    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                        <span className="oi oi-home" style={{marginRight: "5px"}} />
                        Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">{deck.name}</li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>

            <h1>{deck.name}: Add Card</h1>

            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="front" class="form-label">Front</label>
                    <textarea 
                        className="form-control" 
                        id="front"
                        name="front" 
                        placeholder="Front side of card"
                        required={true}
                        style={{height: "150px"}}
                        onChange={handleChange}
                        value={cardData.front} 
                    />
                </div>
                <div class="mb-3">
                    <label for="back" class="form-label">Back</label>
                    <textarea 
                        className="form-control" 
                        id="back" 
                        name="back"
                        placeholder="Back side of card"
                        required={true} 
                        style={{height: "150px"}}
                        onChange={handleChange}
                        value={cardData.back}
                    />
                </div>
                <button 
                    type="button" 
                    className="btn btn-secondary btn-lg"
                    style={{marginRight: "10px", marginBottom: "20px"}}
                    onClick={() => history.push("/decks")}
                    > Done
                </button>
                <button 
                    type="Submit" 
                    className="btn btn-primary btn-lg"
                    style={{marginBottom: "20px"}}
                    > Save
                </button>
            </form>
        </>
    )

}

export default AddCardScreen;