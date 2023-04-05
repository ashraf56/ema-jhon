import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Shop from './component/Shop/Shop'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
