import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if(spinner){
    setTimeout(()=>{
      spinner.style.display = "none";
      setLoading(false);
    }, 1500)
  }

  return (
    !loading && (<div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>)
  );
}

export default App;
