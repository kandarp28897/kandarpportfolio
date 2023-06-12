import Navbar from './components/Navbar'
import Home from './components/Home';
import './App.css';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Games from './components/Games';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">  
      <Navbar />
      <Home />
      <About />
      <Games />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
