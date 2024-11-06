import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import About from './sections/About'
import { useEffect } from 'react'
import Work from './sections/Work'

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
    </main>
  )
}

export default App