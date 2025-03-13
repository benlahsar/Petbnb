import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PetOwnerHomePage from "./pages/PetOwnerHomePage";
import HosterWelcomePage from "./pages/HosterWelcomePage";
import BecomeHost from "./pages/BecomeHost.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetOwnerHomePage />} />
        <Route path="/host/home" element={<BecomeHost />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
