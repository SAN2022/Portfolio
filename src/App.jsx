import './App.css'
import Header from './Components/Header'
import Navbar from './Components/navbar'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import MiniProjects from './Components/Mini projects'
import Internships from './Components/Internship'
import AboutMe from './Components/About me'

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <MiniProjects/>
      <Internships/>
      <Contact/>
    </>
  )
}

export default App
