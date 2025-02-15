import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ListingDetails from './components/ListingDetails';
import './index.css';
import HosterHomePage from './pages/HosterHomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HosterHomePage />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
