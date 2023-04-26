import React from 'react';

const MindfulnessExercise = ({ exercise }) => {
    return (
        <div className="mindfulness-exercise">
            <h3>{exercise.title}</h3>
            <p>{exercise.description}</p>
        </div>
    );
};

export default MindfulnessExercise;
