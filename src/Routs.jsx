import { Routes, Route, Link } from "react-router-dom";
import Blue from './Blue';
import Red from './Red';
import Home from './Home';
import Green from "./Green";
import Purple from "./Purple";



export default function Routs() {
    return (
    <>
        <div id="main-section">
        <Routes>  
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/purple" element={<Purple />} />
        <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
    )
  }