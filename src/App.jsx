import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features"

import * as Sentry from '@sentry/react';
import Gaming from "./components/Gaming"
import Footer from "./components/Footer"



const App = ()=> {
  
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <Gaming/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App);
