import React from "react";

function CardForm({ handleSubmit, handleChange, placeholder, value }) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="front" className="form-label">Front</label>
                    <textarea 
                        className="form-control" 
                        id="front"
                        name="front" 
                        placeholder={placeholder}
                        required={true}
                        style={{height: "150px"}}
                        onChange={handleChange}
                        value={value} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="back" className="form-label">Back</label>
                    <textarea 
                        className="form-control" 
                        id="back" 
                        name="back"
                        placeholder={placeholder}
                        required={true} 
                        style={{height: "150px"}}
                        onChange={handleChange}
                        value={value}
                    />
                </div>
            </form>
        </>
    );
}

export default CardForm;