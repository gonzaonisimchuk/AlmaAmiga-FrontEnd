import React, { useState, useEffect } from "react";
import "./Recommendations.css";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Aquí puedes obtener las recomendaciones desde tu backend
    const fetchRecommendations = async () => {
      // Reemplaza esta parte con la llamada a tu API para obtener las recomendaciones
      const fakeRecommendations = [
        "Prueba esta meditación guiada de 10 minutos.",
        "Lee este artículo sobre cómo manejar el estrés.",
        "Registra tus emociones en el diario emocional.",
        "Prueba estas técnicas de respiración para relajarte.",
      ];
      setRecommendations(fakeRecommendations);
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="recommendations-container">
      <h2>Recomendaciones</h2>
      <ul className="recommendations-list">
        {recommendations.map((recommendation, index) => (
          <li key={index} className="recommendation-item">
            {recommendation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
