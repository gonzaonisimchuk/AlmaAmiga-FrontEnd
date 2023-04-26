import React from 'react';
import AppRouter from './routes/AppRouter';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>AlmaAmiga</h1> */}
      </header>
      <main>
        <AppRouter />
      </main>
      <footer>
        <p>© 2023 AlmaAmiga. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
