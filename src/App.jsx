import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import Header from './Component/Header'

function App() {

  return (
    <div className='main_wrapper'>
      <Header/>
      <Home/>
    </div>
  )
}

export default App
