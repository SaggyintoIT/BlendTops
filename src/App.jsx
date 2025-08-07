import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AbouttopSection from './Components/AboutUS/AboutTopSection'
import Blog from './Components/Blogs/Blogs'
import CareersPage from './Components/Career/Career'
import Collaborate from './Components/Collaborate/Collaborate'
import ContactPage from './Components/ContactUs/ContactUs'
import PrivacyPolicy from './Components/ContactUs/Policy.'

import Footer from './Components/Footer/Footer'
import InvestorsMedia from './Components/Media/Media'


import OurProducts from './Components/OurProduct/Product'
import Navbars from './Components/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbars />
        
        <main className="main-content">
          {/* <Routes>
            <Route path="/" element={<OurProducts/>} />
            
            <Route path="/products" element={<OurProducts />} />
            <Route path="/investors-media" element={<InvestorsMedia />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes> */}
        </main>
        
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;