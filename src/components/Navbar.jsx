/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom"
import "./Navbar.css"

export default function NavBar(){
    return (
        <>
        <nav className="navBar">
        <div className="navBarIcon">
            <span> <a href=""><img src="src\assets\twitter.svg" alt="twitter logo"/></a></span>
            <span><a href=""><img src="src\assets\github.svg" alt="github logo" /></a></span>
            <span><a href=""><img src="src\assets\linkedin.svg" alt="linkedIn logo" /></a></span>
        </div>
        </nav>
        </>
    )
}