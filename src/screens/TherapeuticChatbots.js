import React, { useState } from "react";
import "./TherapeuticChatbots.css";

const TherapeuticChatbots = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
            event.preventDefault(); // Previene el comportamiento predeterminado del formulario
        }
    };

    const handleSendMessage = () => {
        setMessages([...messages, { sender: "user", text: newMessage }]);

        // Aquí puedes agregar la lógica para generar una respuesta del bot
        // Por ahora, el bot simplemente repite el mensaje del usuario
        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, { sender: "bot", text: newMessage }]);
            setNewMessage("");
        }, 500);
    };

    return (
        <div className="therapeutic-chatbots-container">
            <h2>Chatbot</h2>
            <div className="chatbox">
                <ul className="chat-messages">
                    {messages.map((message, index) => (
                        <li key={index} className={`chat-message ${message.sender}`}>
                            <span className={`message-text ${message.sender}`}>{message.text}</span>
                        </li>
                    ))}
                </ul>
                <div className="chat-input-area">
                    <input
                        value={newMessage}
                        onChange={handleNewMessageChange}
                        placeholder="Escribe un mensaje"
                        className="chat-input"
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSendMessage} className="send-button">
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TherapeuticChatbots;
