import React from "react";
import { createDeck } from "../../utils/api/index";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NotFound from "../NotFound";

function CreateDeck(){
    const history = useHistory();
    
    const initialFormState = {
        name: "",
        description: ""
    };
    const [deckData, setDeckData] = useState({ ...initialFormState });
    
    // Input change handler //
    const handleChange = ({ target }) => {
        setDeckData({ ...deckData, [target.name]: target.value});
    };

    // Handle submit, createDeck(), and navigate to new deck page with new :deckId //
    const handleSubmit = (event) => {
        event.preventDefault();
        let newDeckId = "";

        const abortController = new AbortController();
        async function loadCreatedDeck() {
            try {
                const response = await createDeck(deckData, abortController.signal);
                const apiResponse = await response.json();
                newDeckId = apiResponse.id;
            } catch (error) {
                if (error.name === "AbortError") {
                    return <NotFound />;
                } else {
                    throw error;
                }
            }
        }
        loadCreatedDeck();

        setDeckData({ ...initialFormState });
        history.push(`/decks/${newDeckId}`);
    };


    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
            <h1>Create Deck</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name" 
                        placeholder="Deck Name"
                        onChange={handleChange}
                        value={deckData.name} 
                    />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        id="description" 
                        name="description"
                        placeholder="Brief description of the deck" 
                        style={{height: "150px"}}
                        onChange={handleChange}
                        value={deckData.description}
                    />
                </div>
                <button 
                    type="button" 
                    className="btn btn-secondary btn-lg"
                    style={{marginRight: "10px", marginBottom: "20px"}}
                    onClick={() => history.push("/")}
                    > Cancel
                </button>
                <button 
                    type="Submit" 
                    className="btn btn-primary btn-lg"
                    style={{marginBottom: "20px"}}
                    > Submit
                </button>
            </form>
        </div>
    );
};

export default CreateDeck;