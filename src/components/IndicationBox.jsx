import React, { useContext, useState, useEffect } from 'react';
import '../styles/IndicationBox.css';
import { Context } from '../App';
import { useNavigate } from 'react-router-dom';

function IndicationBox({ color, size, top, left }) {
  const [isLit, setIsLit] = useState(false);
  const { keyCounter, setKeyCounter, page1Success, setPage1Success } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (keyCounter === 4 && !page1Success) {
      setTimeout(() => {
        setPage1Success(true);
        setTimeout(() => {
          navigate('/enigme-2');; // Remplacez '/page2' par l'URL de la page vers laquelle vous souhaitez rediriger
        }, 2000); // Délai de 4 secondes
      }, 1000); // Délai d'une seconde
    }
  }, [keyCounter, page1Success, setPage1Success, history]);

  function checkIfGreen() {
    if (color === 'green' && !isLit && !page1Success) {
      setKeyCounter(keyCounter + 1);
      setIsLit(true);
    }
  }

  const boxStyle = {
    width: size,
    height: size,
    backgroundColor: page1Success ? 'white' : isLit ? 'green' : color,
    top: top,
    left: left,
    opacity: page1Success ? 0 : isLit ? 1 : 0,
    pointerEvents: keyCounter === 4 ? 'none' : 'auto',
  };

  return (
    <div onClick={checkIfGreen} style={boxStyle} className={'indication-box'}></div>
  );
}

export default IndicationBox;
