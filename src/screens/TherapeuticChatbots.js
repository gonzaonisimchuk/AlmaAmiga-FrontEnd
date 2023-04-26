import React from "react";
import "./TherapeuticChatbots.css";

const chatbots = [
    {
        name: "Chatbot 1",
        description:
            "Este chatbot te ayudará a lidiar con situaciones de estrés y ansiedad.",
    },
    {
        name: "Chatbot 2",
        description:
            "Este chatbot te proporcionará técnicas de afrontamiento para momentos difíciles.",
    },
    {
        name: "Chatbot 3",
        description:
            "Este chatbot te guiará a través de ejercicios de relajación y meditación.",
    },
];

const TherapeuticChatbots = () => {
    return (
        <div className="therapeutic-chatbots-container">
            <h2>Chatbots terapéuticos</h2>
            <ul className="therapeutic-chatbots-list">
                {chatbots.map((chatbot, index) => (
                    <li key={index} className="therapeutic-chatbots-item">
                        <div className="chatbot-name">{chatbot.name}</div>
                        <div className="chatbot-description">{chatbot.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TherapeuticChatbots;
