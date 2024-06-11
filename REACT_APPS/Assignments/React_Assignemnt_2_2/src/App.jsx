import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Profiles from './Components/profiles/Profiles'
import Footer from './Components/footer/Footer'

function App() {

  let users=[
    {
      title:"News App using ReactJS (Parsing XML RSS feed to JSON)",
      desc:"News App using ReactJS (Parsing XML RSS feed to JSON) Photo by Christina Morillo from PexelsLive Demo:",
      auth:"Mehul Kothari",
      date:"Aug 12, 2020 4:32",
      image:"./first.webp"
    },{
      title:"Medium like Blogging App Using Angular 9 and Firebase",
      desc:"Creating Medium like Blogging App Using Angular 9 and Firebase Photo by Miguei A.Padrinian from PexelsLive Demo:",
      auth:"Mehul Kothari",
      date:"Jul 10, 2020 10:59",
      image:"./second.webp"
    },{
      title:"Covid 19 Tracker (Statistics) app Using Angular",
      desc:"Covid 19 Tracker (Statistics) app Using Angular Dark Mode Demonstration: Everyone is aware",
      auth:"Mehul Kothari",
      date:"Apr 04, 2020 08:46",
      image:"./third.png"
    },
  ]
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className="container">
      {users.map(user => (
            <Profiles key={user.id} user={user} />
        ))}   
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default App