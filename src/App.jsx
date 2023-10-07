import React, { useState, useEffect } from 'react';
import './App.css';
import StartPage from './pages/StartPage';
import Enigme2 from './pages/Enigme2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const Context = React.createContext();

function App() {
  const [keyCounter, setKeyCounter] = useState(0);
  const [page1Success, setPage1Success] = useState(false);

  // Fonction pour déclencher la transition de l'arrière-plan
  function triggerBackgroundTransition() {
    setPage1Success(true);
  }

  useEffect(() => { 
    document.body.style.backgroundColor = page1Success ? 'white' : 'black';
   }, [page1Success])

  useEffect(() => {
    // Définir une classe CSS pour l'animation de transition sur le body lorsque page1Success est vrai
    if (page1Success) {
      document.body.classList.add('background-transition');
    } else {
      document.body.classList.remove('background-transition');
    }
  }, [page1Success]);

  // ...

  return (
    <Router>
      <Context.Provider value={{ keyCounter, setKeyCounter, page1Success, setPage1Success }}>
        <div className="App">
          <Routes>
            <Route path="/enigme-1" element={<StartPage onBackgroundTransition={triggerBackgroundTransition} />} />
            <Route path="/enigme-2" element={<Enigme2 />} />
            <Route path="/" element={<StartPage />} />
          </Routes>
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App;
