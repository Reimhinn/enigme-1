import React, { useState } from 'react'
import './App.css'
import StartPage from './pages/StartPage'

export const Context = React .createContext()

function App() {

  const [keyCounter, setKeyCounter] = useState(0)

  return (
    <Context.Provider value={[keyCounter, setKeyCounter]}>
    <div id='app'>
      <StartPage />
    </div>
    </Context.Provider>
  )
}

export default App
