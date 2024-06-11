import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Profiles from './Components/profiles/Profiles'
import Footer from './Components/footer/Footer'

function App() {

  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className="container">
      <Profiles></Profiles>
      <Profiles></Profiles>
      <Profiles></Profiles>
      <Profiles></Profiles>
      <Profiles></Profiles>
      <Profiles></Profiles>
      <Profiles></Profiles>
      <Profiles></Profiles>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default App