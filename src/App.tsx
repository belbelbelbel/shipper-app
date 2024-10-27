import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Hero } from './Component/Hero'
import { Signup } from './Component/Auth/Signup'

function App() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.key}> 
      <Route path='/' element={<Hero/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default App
