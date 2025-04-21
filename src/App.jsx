import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PetOwnerHomePage from "./pages/PetOwnerHomePage";
import BecomeHost from "./pages/BecomeHost.jsx";
import NotFound from "./pages/NotFound.jsx";
import ListingDetails from "./components/ListingDetails.jsx";
import LoginPage from "./pages/Login.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import HostingForm from "./pages/HostingFormPage.jsx";
import ListingPage from "./pages/ListingPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetOwnerHomePage />} />
        <Route path="/host/home" element={<BecomeHost />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegistrationPage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/host/create" element={<HostingForm />} />
        <Route path="/host/listings" element={<ListingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
