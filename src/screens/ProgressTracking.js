import React, { useState, useEffect } from "react";
import "./ProgressTracking.css";

const ProgressTracking = () => {
    const [progressData, setProgressData] = useState([]);

    useEffect(() => {
        // Aquí puedes obtener los datos de progreso desde tu backend
        const fetchProgressData = async () => {
            // Reemplaza esta parte con la llamada a tu API para obtener los datos de progreso
            const fakeProgressData = [
                { date: "2023-05-01", progress: "Mejora en la ansiedad" },
                { date: "2023-05-15", progress: "Reducción del estrés" },
                { date: "2023-06-01", progress: "Mejora en el estado de ánimo" },
            ];
            setProgressData(fakeProgressData);
        };

        fetchProgressData();
    }, []);

    return (
        <div className="progress-tracking-container">
            <h2>Seguimiento del Progreso</h2>
            <ul className="progress-list">
                {progressData.map((item, index) => (
                    <li key={index} className="progress-item">
                        <span className="progress-date">{item.date}</span>
                        <span className="progress-description">{item.progress}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProgressTracking;
