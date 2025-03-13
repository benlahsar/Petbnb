import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PetOwnerHomePage from "./pages/PetOwnerHomePage";
import HosterWelcomePage from "./pages/HosterWelcomePage";
import BecomeHost from "./pages/BecomeHost.jsx";
import NotFound from "./pages/NotFound.jsx";
import ListingDetails from "./components/ListingDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetOwnerHomePage />} />
        <Route path="/host/home" element={<BecomeHost />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
