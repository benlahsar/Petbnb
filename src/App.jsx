import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PetOwnerHomePage from "./pages/PetOwnerHomePage";
import HosterWelcomePage from "./pages/HosterWelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetOwnerHomePage />} />
        <Route path="/host/home" element={<HosterWelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
