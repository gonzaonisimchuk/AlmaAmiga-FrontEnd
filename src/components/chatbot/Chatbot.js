import React from 'react';

const Chatbot = ({ chatbot }) => {
    return (
        <div className="chatbot">
            <h3>{chatbot.name}</h3>
            <p>{chatbot.description}</p>
        </div>
    );
};

export default Chatbot;
