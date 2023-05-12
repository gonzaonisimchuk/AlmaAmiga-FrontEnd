import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Comment } from 'react-loader-spinner';

import "./TherapeuticChatbots.css";

const TherapeuticChatbots = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isInputDisabled, setInputDisabled] = useState(false);
    const chatBoxRef = useRef(null);

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
        setIsLoading(true);
        setInputDisabled(true);
        setMessages([...messages, { sender: "user", text: newMessage }]);

        // Enviar mensaje al backend
        axios.post('http://localhost:8000/api/chatbot', { message: newMessage })
            .then(response => {
                // Añadir respuesta del chatbot al chat
                setMessages(prevMessages => [...prevMessages, { sender: "bot", text: response.data.message }]);
                setNewMessage("");
                setIsLoading(false);
                setInputDisabled(false);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="therapeutic-chatbots-container">
            <h2>Chatbot</h2>
            <div className="chatbox" ref={chatBoxRef}>
                <ul className="chat-messages">
                    {messages.map((message, index) => (
                        <li key={index} className={`chat-message ${message.sender}`}>
                            <span className={`message-text ${message.sender}`}>{message.text}</span>
                        </li>
                    ))}
                    {isLoading &&
                        <li className="chat-message bot">
                            <Comment
                                visible={true}
                                height="35"
                                width="35"
                                ariaLabel="comment-loading"
                                wrapperStyle={{}}
                                wrapperClass="comment-wrapper"
                                color="#fff"
                                backgroundColor="#F4442E"
                            />
                        </li>
                    }
                </ul>
                <div className="chat-input-area">
                    <input
                        value={newMessage}
                        onChange={handleNewMessageChange}
                        placeholder="Escribe un mensaje"
                        className="chat-input"
                        onKeyPress={handleKeyPress}
                        disabled={isInputDisabled}
                    />
                    <button onClick={handleSendMessage} className="send-button" disabled={isInputDisabled}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TherapeuticChatbots;
