// eslint-disable-next-line no-unused-vars
import React from "react"
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom"
import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import Section from "./components/Section.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"

export default function App(){
    return (
        <div className="page">
            <div className="pageContent"> 
                < Header />
                < Navbar />
                < Section />
                < Footer />
            </div>
        </div>
    )
}