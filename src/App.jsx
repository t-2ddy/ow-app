import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import Welcome from './pages/Welcome.jsx';
import Home from './pages/Home.jsx';
import Heros from './pages/Heros.jsx';
import Maps from './pages/Maps.jsx';
import HeroPage from './pages/heroPages/HeroPage.jsx';
import Header from './components/header.jsx';

export default function App() {
  return (
    <div>
      <div className="absolute top-0 right-0 left-0 z-50">
        {/* use context / wrap whole app comp with a context provider and pass value of Header*/}
        <Header />
      </div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/heros" element={<Heros />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/hero/:name" element={<HeroPage />} />
        </Routes>
      </Router>
    </div>
  );
}
