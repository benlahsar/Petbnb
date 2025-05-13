import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PetOwnerHomePage from "./pages/PetOwnerHomePage";
import BecomeHost from "./pages/BecomeHost.jsx";
import NotFound from "./pages/NotFound.jsx";
import ListingDetails from "./components/ListingDetails.jsx";
import LoginPage from "./pages/Login.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import HostingForm from "./pages/HostingFormPage.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import TestListing from "./pages/TestListings.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetOwnerHomePage />} />
        <Route path="/host/home" element={<BecomeHost />} />
        {/* <Route path="/listing/:id" element={<ListingDetails />} /> */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegistrationPage />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/host/create" element={<HostingForm />} />
        <Route path="/listing/:id" element={<ListingPage />} />
        <Route path="/test/listings" element={<TestListing />} />
      </Routes>
    </Router>
  );
}

export default App;
