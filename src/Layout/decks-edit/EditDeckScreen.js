import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api/index";

function EditDeckScreen() {
    const history = useHistory();
    const deckId = useParams().deckId;
    const [deck, setDeck] = useState("");

    // Obtain deck from deckId //
    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId);
            setDeck(response);
        }
        loadDeck();
    }, [deckId]);


    // Input change handler //
    const handleChange = ({ target }) => {
        setDeck({ ...deck, [target.name]: target.value});
    };

    // Handle Submit, updateDeck() //
    const handleSubmit = (event) => {
        event.preventDefault();
        updateDeck(deck)
        .then(history.push(`/decks/${deck.id}`));
    };


    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/" style={{color:"teal"}}>
                    <span className="oi oi-home" style={{marginRight: "5px"}} />
                    Home
                    </Link>
                </li>
                <li className="breadcrumb-item" style={{color:"teal"}}>{deck.name}</li>
                <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
            </ol>
        </nav>

        <h1>Edit Deck</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name" 
                        placeholder={deck.name}
                        required={true}
                        onChange={handleChange}
                        value={`${deck.name}`} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        id="description" 
                        name="description"
                        placeholder={deck.description}
                        required={true} 
                        style={{height: "150px"}}
                        onChange={handleChange}
                        value={deck.description}
                    />
                </div>
                <button 
                    type="button" 
                    className="btn btn-secondary btn-lg"
                    style={{marginRight: "10px", marginBottom: "20px"}}
                    onClick={() => history.push(`/decks/${deckId}`)}
                    > Cancel
                </button>
                <button 
                    type="Submit" 
                    className="btn btn-primary btn-lg"
                    style={{marginBottom: "20px"}}
                    > Submit
                </button>
            </form>
        </>
    );
}

export default EditDeckScreen;