import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './webpages/home';
import Contact from './webpages/contact';
import Guide from './webpages/storageguide';
import Login from './webpages/login';
import About from './webpages/about';
import Service from './webpages/services';
import Index from './containers';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}>
        <Route path='/home' element={<Home />} />  
        <Route path='/contact' element={<Contact />} />
        <Route path='/guide' element={<Guide />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
