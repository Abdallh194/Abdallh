import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import PageContent from "./components/Home_Content/Page_Content";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageContent />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
