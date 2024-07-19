import React from "react";
import Navbar from "./components/navbar/nav";
import Home from "./components/routes/1.home";
import About from "./components/routes/2.aboutUs";
import Services from "./components/routes/3.services";
import Gallery from "./components/routes/4.gallery";
import Contact from "./components/routes/5.contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
