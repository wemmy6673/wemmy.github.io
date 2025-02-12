import Header from './components/Header';
import Hero from './components/Hero';
import Description from './components/Description';
import Projects from './components/Projects';
import Skills from './components/Skills';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from './components/Footer';

function App() {

  return (
    <>

    <Header />
    <Hero />
   
    <ScrollAnimation animateIn="fadeInUp" delay="">
    <Description />
   </ScrollAnimation>
    
    
    <ScrollAnimation animateIn="fadeInUp" delay="">
    <Skills />
   </ScrollAnimation>

   <ScrollAnimation animateIn="fadeIn">
    <Projects /> 
   </ScrollAnimation>
   <Footer />
  
    </>
  )
}

export default App
