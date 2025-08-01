import { useState } from "react";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Product from "./components/Product";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact"
import NotFound from "./components/NotFound";
import CartPage from "./components/CartPage";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/Products" element={<Product />}/>         
          <Route path="/CartPage" element={<CartPage />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/About" element={<AboutPage />}/>
          <Route path= "/SignUp" element={<SignUp/>} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
