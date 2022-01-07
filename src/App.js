import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/HeaderFooter/Header";
import Footer from "./Components/HeaderFooter/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import UseStateTraining from "./Components/Training/UseStateTraining";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <UseStateTraining />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
