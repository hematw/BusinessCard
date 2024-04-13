import React from "react";
import profile from "../assets/images/profile.jpg"
import "./MainComponent.css"

export default function MainEl() {
    return (
        <main>
            <div className="image-box">
                <img src={profile} alt="" className="profile" />
            </div>

            <div className="info">
                <div className="content">
                    <h1 className="name">Hemat Waziri</h1>
                    <p className="title">JavaScript Web Dev</p>
                    <p className="site">hematw.me</p>
                </div>

                <div className="btn-box">
                    <button className="btn btn-email">
                        <i class="fa-solid fa-envelope"></i>
                        <span className="text">Email</span>
                    </button>
                    <button className="btn btn-lnkd">
                        <i class="fa-brands fa-linkedin"></i>
                        <span className="text">Linkedin</span>
                    </button>
                </div>

                <div className="about">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>

                <div className="interests">
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
        </main>
    )
}