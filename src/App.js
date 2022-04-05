import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./webpages/home";
import Contact from "./webpages/contact";
import Guide from "./webpages/storageguide";
import Entry from "./component/Login/Entry";
import About from "./webpages/about";
import Service from "./component/Services/services";
import Index from "./containers";
import Box from "./component/Services/box";
import Household from "./component/Services/HouseHoldService/household";
import Vehicle from "./component/Services/vehicle";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/household" element={<Household />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/box" element={<Box />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Entry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
