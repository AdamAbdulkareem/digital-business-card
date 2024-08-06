/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom"
import "./Header.css"

export default function Header() {
    return (
    <>
    <header className="header">
    <div>
            <img className="headerBackground" src="./src/assets/bg-1280x704.png" alt="background image"/>
            <span> <img className="profileImage" src="./src/assets/abdulkareem.jpeg" alt="profile picture"/> </span>
        </div>
        <div className="profileDetails">
            <div className="profileTitle">
                <h4>Adam Abdulkareem</h4>
            <p>Software Engineer</p>
            </div>
            <p className="profileParagraph">I am a dedicated and proficient Software Engineer with a passion for developing innovative solutions that improve the efficiency and functionality of technology. With 2years of experience in the industry, I specialize in full-stack development, designing scalable applications, and optimizing performance. I have strong expertise in the MERN tech stack (MongoDB, Express, React, Node.js), along with other programming languages and frameworks.</p>

        </div>
    </header>
        
    </>
    );
}
