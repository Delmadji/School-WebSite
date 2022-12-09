import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Programs from "./Components/Programs";
import Classes from "./Components/Classes";
import Pricing from "./Components/Pricing";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import TeacherSection from "./Components/TeacherSection";
import TestimonialSection from "./Components/TestimonialSection";
import Footer from "./Components/Footer";
import SlideSwipeTest from "./Components/SlideSwipeTest";
import Translation from "./Components/Translation";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Programs" element={<Programs />} />
            <Route path="/About" element={<About />} />
            <Route path="/Classes" element={<Classes />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Services />
      <About />
      <Classes />
      <TeacherSection />
      <TestimonialSection />
      <Contact />
      <Blog />
      <Footer />

      <Translation />
    </>
  );
}

export default App;
