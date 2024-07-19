import React from 'react';
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Education from './components/education/Education';
import "./App.css"
const App = () => {
  return (
    <>
        <Header />
      <main className="main">
        <Home />
        <About />
        <Education />
        <Skills />
        <Project />
        <Contact />
      </main>
        <Footer />
    </>
  );
}

export default App