import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Hero } from './Component/Hero'
import { Signup } from './Component/Auth/Signup'
import { PersonalInfo } from './Component/Auth/PersonalInfo'
import useWindowSize from './Hooks/useWindowSize'
import { Signin } from './Component/Auth/Signin'
import { Dashboard } from './Component/NextedRoute/Dashboard'
import { MainContainer } from './Component/MainContainer'
import { Settings } from './Component/NextedRoute/Settings'
import { Supplier } from './Component/NextedRoute/Supplier'
import { Notifications } from './Component/NextedRoute/Notifications'

function App() {
  const location = useLocation()
  const { width, height } = useWindowSize()

  console.log(width)

  if (width < 768) {
    return (<div className='bg-black text-[1.1rem] text-white w-screen flex flex-col justify-center items-center  h-screen'>
      View On Laptop For Better Experience
    </div>)
  }


  return (
    <Routes location={location} key={location.key}>
      <Route path='/' element={<Hero />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup/PI' element={<PersonalInfo />} />
      <Route path='overview' element={<MainContainer />}>
        <Route index element={<Dashboard />} />
        <Route path='settings' element={<Settings />} />
        <Route path='suppliers' element={<Supplier />} />
        <Route path='notifications' element={<Notifications />} />
      </Route>
    </Routes>
  )
}

export default App
