
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Projectspage from './pages/Projectspage';
import Contactpage from './pages/Contactpage';
function App() {
  return (
   <>
   
 
   
   <Routes>
    <Route path="/" element = { <Homepage />} />
    <Route path="/projectspage" element = { <Projectspage />} />
    <Route path="/contactpage" element = { <Contactpage />} />
    <Route path="/about" element = { <Aboutpage />} />
   </Routes>
      
   </>
  );
}

export default App;
