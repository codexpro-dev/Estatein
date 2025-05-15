import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Clients from './components/Clients'
import Faqs from './components/Faqs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flow">
        <Header />
      <Hero />
      <Featured />
      <Clients />
      <Faqs />
      <Footer />
    </div>
  )
}

export default App
