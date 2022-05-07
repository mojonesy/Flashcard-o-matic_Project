import React from "react";
import { createDeck } from "../../utils/api/index";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function CreateDeckScreen(){
    const history = useHistory();
    
    // Set initial empty form state //
    const initialFormState = {
        name: "",
        description: ""
    };
    const [deckData, setDeckData] = useState({ ...initialFormState });
    
    
    // Input change handler //
    const handleChange = ({ target }) => {
        setDeckData({ ...deckData, [target.name]: target.value});
    };

    // Handle submit -> createDeck(), navigate to new deck page with new :deckId //
    const handleSubmit = (event) => {
        event.preventDefault();

        createDeck(deckData)
        .then((newDeck) => history.push(`/decks/${newDeck.id}`))
        .catch(error => console.error);
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
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>

            <h1>Create Deck</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name" 
                        placeholder="Deck Name"
                        required={true}
                        onChange={handleChange}
                        value={deckData.name} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        id="description" 
                        name="description"
                        placeholder="Brief description of the deck"
                        required={true} 
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
        </>
    );
};

export default CreateDeckScreen;