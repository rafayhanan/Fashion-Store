import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginSignup from './Components/LoginSignup'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <LoginSignup />
    </div>
  )
}

export default App
