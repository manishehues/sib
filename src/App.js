import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import './assets/css/custom.css';
import './assets/css/animate.min.css';
import './assets/css/responsive.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import News from './pages/News';
import Member from './pages/Member';
import Header from './component/Header';



function App() {  


  

  return (
    <>
      <BrowserRouter>
          <Header />               
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/become-a-member" element={<Member />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
