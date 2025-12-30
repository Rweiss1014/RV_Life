import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Links from './pages/Links';
import MediaKit from './pages/MediaKit';
import RVBudget from './pages/RVBudget';
import Disclosure from './pages/Disclosure';
import Privacy from './pages/Privacy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogsolofemalervliving" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/links" element={<Links />} />
            <Route path="/media-kit-nancy-carter" element={<MediaKit />} />
            <Route path="/rv-budget-worksheet" element={<RVBudget />} />
            <Route path="/disclosure" element={<Disclosure />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
