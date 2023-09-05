import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
