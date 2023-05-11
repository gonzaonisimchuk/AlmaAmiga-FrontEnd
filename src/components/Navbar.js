import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import storage from '../utils/storage';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" >
            Inicio
          </NavLink>
        </li>
        {storage.isAuthenticated() && ( // Si el usuario está autenticado, muestra los enlaces autenticados
          <>
            <li>
              <NavLink to="/chatbot" >
                Chatbot
              </NavLink>
            </li>
            <li>
              <NavLink to="/journal" >
                Diario
              </NavLink>
            </li>
            <li>
              <NavLink to="/recommendations" >
                Recomendaciones
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <div className="dropdown">
        <FontAwesomeIcon icon={faUser} onClick={toggleDropdown} />
        {!storage.isAuthenticated() && dropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/login" onClick={toggleDropdown}>
                Iniciar sesión
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" onClick={toggleDropdown}>
                Registrarse
              </NavLink>
            </li>
          </ul>
        )}

        {storage.isAuthenticated() && dropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/user-profile" >
                Perfil
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" >
                Cerrar sesión
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
