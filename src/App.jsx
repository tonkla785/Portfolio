import Hero from './sections/Hero.jsx'
import Navbar from './sections/Navbar.jsx'
import About from './sections/About.jsx'
import { useEffect } from 'react'
import Work from './sections/Work.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  useEffect(()=>{
    document.title = `Portfolio`
  })
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App