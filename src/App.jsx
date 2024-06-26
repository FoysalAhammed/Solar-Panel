import About from "./Components/About"
import Achievement from "./Components/Achievement"
import Faq from "./Components/Faq"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Project from "./Components/Project"
import Services from "./Components/Services"
import Teams from "./Components/Teams"
import Testimonial from "./Components/Testimonial"

function App() {
  return (
    <>
     <Navbar/>
     <Header/>
     <Achievement/>
     <About/>
     <Services/>
     <Teams/>
     <Project/>
     <Testimonial/>
     <Faq/>
     <Footer/>
    </>
  )
}

export default App
