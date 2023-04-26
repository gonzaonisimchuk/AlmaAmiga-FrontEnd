import React, { useState, useEffect } from "react";
import "./FriendsList.css";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        // Aquí puedes obtener los datos de amigos desde tu backend
        const fetchFriendsData = async () => {
            // Reemplaza esta parte con la llamada a tu API para obtener los datos de amigos
            const fakeFriendsData = [
                { id: 1, name: "Juan Pérez" },
                { id: 2, name: "María Rodríguez" },
                { id: 3, name: "Carlos García" },
            ];
            setFriends(fakeFriendsData);
        };

        fetchFriendsData();
    }, []);

    return (
        <div className="friends-list-container">
            <h2>Lista de Amigos</h2>
            <ul className="friends-list">
                {friends.map((friend) => (
                    <li key={friend.id} className="friend-item">
                        {friend.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsList;
