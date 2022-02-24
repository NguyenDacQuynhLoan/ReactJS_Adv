import React from "react";
import Navbar from "../components/navbar";
import { 
    BrowserRouter,
    Routes, 
    Route 
} from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Contact } from "./contact";
import Products from "./products";




export default function Index() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact />}></Route>

        <Route path="products/*" element={<Products/>}></Route>
      </Routes>
    </BrowserRouter>
  );

}
