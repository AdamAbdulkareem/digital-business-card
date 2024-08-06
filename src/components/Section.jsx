/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom"
import "./Section.css"
export default function Section(){
    return (
        <>
            <div className="sectionContent">
                <div>
                    <span>
                        <a href="">
                            <img src="./src/assets/location.svg" alt="location" />
                            <p>Lagos, Nigeria</p>
                        </a>
                    </span>
                </div>
                <div>
                    <span> 
                        <a href="">
                            <img src="./src/assets/email.svg" alt="email" />
                            <p>dmabdulkareem@gmail.com</p>
                        </a>
                    </span>
                </div>
                <div>
                    <span>
                        <a href="">
                            <img src="./src/assets/phone.svg" alt="telephone" />
                            <p>+2348089406051</p>
                        </a>
                    </span>
                </div>
            </div>
        </>
    )
}