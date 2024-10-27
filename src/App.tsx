import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Hero } from './Component/Hero'
import { Signup } from './Component/Auth/Signup'
import { PersonalInfo } from './Component/PersonalInfo'

function App() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.key}> 
      <Route path='/' element={<Hero/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signup/PI' element={<PersonalInfo/>}/>
    </Routes>
  )
}

export default App
