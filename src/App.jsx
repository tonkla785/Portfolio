import Hero from './sections/Hero.jsx'
import Navbar from './sections/Navbar.jsx'
import About from './sections/About.jsx'
import { useEffect } from 'react'
import Work from './sections/Work.jsx'
import Contact from './sections/Contact.jsx'

const App = () => {
  useEffect(()=>{
    document.title = `Portfolio`
  })
  return (
    <main className='max-w-7xl mx-auto min-h-screen flex flex-col items-center'>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Contact/>
    </main>
  )
}

export default App