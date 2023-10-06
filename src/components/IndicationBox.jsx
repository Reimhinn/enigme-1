import React, { useContext, useState } from 'react'
import '../styles/IndicationBox.css'
import { Context } from '../App';

function IndicationBox({color, size, top, left}) {

    const [keyCounter, setKeyCounter] = useContext(Context)
    const [isLit, setIsLit] = useState(false);

    function checkIfGreen() {
        if (color === 'green' && !isLit) {
            setKeyCounter(keyCounter + 1)
            setIsLit(true);
        }
    }
    const boxStyle = {
        width: size,
        height: size,
        backgroundColor: isLit ? 'green' : color,
        top: top,
        left: left,
        opacity: isLit ? 1 : 0
      };
  return (
    <div onClick={checkIfGreen} style={boxStyle} className='indication-box'></div>
  )
}

export default IndicationBox