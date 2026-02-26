import React from "react"
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Programs from "./component/Programs"
import WhyChoose from "./component/WhyChoose"
import Trailers from "./component/Trainers"
import Pricing from "./component/Pricing"
import Footer from "./component/Footer"
import Contact from "./component/Contact"
import WhatsAppButton from "./component/WhatsAppButton"

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Programs/>
      <WhyChoose/>
      <Trailers/>
      <Pricing/>
      <Contact/>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
