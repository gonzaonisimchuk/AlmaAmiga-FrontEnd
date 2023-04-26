import React, { useState } from "react";
import "./EmotionalJournal.css";

const EmotionalJournal = () => {
    const [entry, setEntry] = useState("");

    const handleInputChange = (event) => {
        setEntry(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes guardar el registro en el back-end, por ejemplo usando Axios
        console.log("Entrada guardada:", entry);
        setEntry("");
    };

    return (
        <div className="emotional-journal-container">
            <h2>Diario emocional</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="emotional-journal-textarea"
                    value={entry}
                    onChange={handleInputChange}
                    placeholder="Escribe tus pensamientos y emociones aquí..."
                ></textarea>
                <button className="emotional-journal-submit" type="submit">
                    Guardar entrada
                </button>
            </form>
        </div>
    );
};

export default EmotionalJournal;
