import React from "react";
import "./MindfulnessExercises.css";

const exercises = [
    { title: "Meditación guiada de 10 minutos", duration: "10 min" },
    { title: "Ejercicio de respiración profunda", duration: "5 min" },
    { title: "Relajación muscular progresiva", duration: "15 min" },
    { title: "Ejercicio de escaneo corporal", duration: "20 min" },
];

const MindfulnessExercises = () => {
    return (
        <div className="mindfulness-exercises-container">
            <h2>Ejercicios de mindfulness</h2>
            <ul className="mindfulness-exercises-list">
                {exercises.map((exercise, index) => (
                    <li key={index} className="mindfulness-exercises-item">
                        <div className="exercise-title">{exercise.title}</div>
                        <div className="exercise-duration">{exercise.duration}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MindfulnessExercises;
