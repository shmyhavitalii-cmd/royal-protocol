import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InfoPage from "./pages/InfoPage";
import Home from "./pages/Home";
import RoyalProtocol from "./pages/RoyalProtocol";
import Storia from "./pages/Storia";
import Leggi from "./pages/Leggi";
import Araldica from "./pages/Araldica";
import Nobilta from "./pages/Nobilta";
import Esteri from "./pages/Esteri";
import Genealogia from "./pages/Genealogia";
import OrdiniCavallereschi from "./pages/OrdiniCavallereschi";
import Indice from "./pages/Indice";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <div className="bg-royalblue text-royalgold min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} /> {/* ✅ Home */}
          <Route path="/info" element={<InfoPage />} />
          <Route path="/royal-protocol" element={<RoyalProtocol />} />
          <Route path="/storia" element={<Storia />} />
          <Route path="/leggi" element={<Leggi />} />
          <Route path="/araldica" element={<Araldica />} />
          <Route path="/nobiltà" element={<Nobilta />} />
          <Route path="/esteri" element={<Esteri />} />
          <Route path="/genealogia" element={<Genealogia />} />
          <Route path="/ordini-cavallereschi" element={<OrdiniCavallereschi />} />
          <Route path="/indice" element={<Indice />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}
