import React, { useState } from "react";
import "./FriendSearch.css";

const FriendSearch = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        // Aquí puedes realizar la búsqueda de amigos en tu backend
        // Reemplaza esta parte con la llamada a tu API para buscar amigos
        const fakeSearchResults = [
            { id: 1, name: "Andrés López" },
            { id: 2, name: "Gabriela Martínez" },
        ];
        setSearchResults(fakeSearchResults);
    };

    return (
        <div className="friend-search-container">
            <h2>Buscar Amigos</h2>
            <div className="search-input-container">
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Buscar amigos..."
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">
                    Buscar
                </button>
            </div>
            <ul className="search-results">
                {searchResults.map((result) => (
                    <li key={result.id} className="search-result-item">
                        {result.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendSearch;
