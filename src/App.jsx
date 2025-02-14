import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HosterHomePage from "./pages/HosterHomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HosterHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
