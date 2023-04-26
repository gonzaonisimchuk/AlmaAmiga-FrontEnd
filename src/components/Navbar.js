import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" >
            Iniciar sesión
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" >
            Registrarse
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-profile" >
            Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/friends-list" >
            Lista de amigos
          </NavLink>
        </li>
        <li>
          <NavLink to="/friend-search" >
            Buscar amigos
          </NavLink>
        </li>
        <li>
          <NavLink to="/therapeutic-chatbots" >
            Chatbots terapéuticos
          </NavLink>
        </li>
        <li>
          <NavLink to="/mindfulness-exercises" >
            Ejercicios de atención plena
          </NavLink>
        </li>
        <li>
          <NavLink to="/emotional-journal" >
            Diario emocional
          </NavLink>
        </li>
        <li>
          <NavLink to="/recommendations" >
            Recomendaciones
          </NavLink>
        </li>
        <li>
          <NavLink to="/progress-tracking" >
            Seguimiento de progreso
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
