import { useState } from 'react'
import Navbar from "./components/Navbar";
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
        <Navbar/>
        <Home/>
        <About/>
        <Menu/>
        <Contact/>
        <Footer/>
      </>
  );
};

export default App;
