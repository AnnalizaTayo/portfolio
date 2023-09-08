import { Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import MyTeckstack from './pages/MyTechstack';
import Projects from './pages/Projects';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import WildcardPage from './pages/WildcardPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/my-techstack" element={<MyTeckstack/>} />
        <Route path="*" element={<WildcardPage/>} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
