import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Intro from './components/sections/Intro.jsx'
import Services from './components/sections/Services.jsx'
import Feature from './components/sections/Feature.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <div className="overflow-hidden bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Feature />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
