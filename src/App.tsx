import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Hero } from './Component/Hero'
import { Signup } from './Component/Auth/Signup'
import { PersonalInfo } from './Component/PersonalInfo'
import useWindowSize from './Hooks/useWindowSize'

function App() {
  const location = useLocation()
const {width, height} = useWindowSize()

console.log(width)

  if(width < 768) {
   return ( <div className='bg-black text-[1.1rem] text-white w-screen flex flex-col justify-center items-center  h-screen'>
    View On Laptop For Better Experience
   </div>)
  }


  return (
    <Routes location={location} key={location.key}> 
      <Route path='/' element={<Hero/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signup/PI' element={<PersonalInfo/>}/>
    </Routes>
  )
}

export default App
