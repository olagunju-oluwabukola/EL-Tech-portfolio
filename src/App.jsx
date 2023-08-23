import { useState } from 'react'
import './App.css'
import Header from './Header'
import Banner from './Banner'
import Services from './Services'
import Project from './Project'
import Footer from './Footer'

function App() {
  

  return (
    <>
      <div>
        <Header />
      <Banner/>
      <Services/>
      <Project/>
      <Footer/>
      </div>
     
    </>
  )
}

export default App
