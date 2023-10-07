import React, { useContext } from 'react'
import '../styles/startKeys.css'
import { Context } from '../App';

function StartKeys() {
    const { keyCounter, setKeyCounter, page1Success, setPage1Success } = useContext(Context);

    function getKeyClass(index) {
        return keyCounter >= index + 1 ? 'start-key white' : 'start-key';
    }

    return (
        <div style={{ opacity: keyCounter <= 0 || page1Success ? 0 : 1}} id='start-keys'>
            <div className={getKeyClass(0)}></div>
            <div className={getKeyClass(1)}></div>
            <div className={getKeyClass(2)}></div>
            <div className={getKeyClass(3)}></div>
        </div>
    );
}

export default StartKeys