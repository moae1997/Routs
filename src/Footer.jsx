import { Routes, Route, Link } from "react-router-dom";



export default function Footer() {
    return (
        <>
         <div id="footerNav">

        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/green">Green</Link>
        <Link to="/purple">Purple</Link>
        </div>
        </>
     
    )
  }