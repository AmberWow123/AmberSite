import AboutList from "../2_about_list/AboutList";
import "./about.scss"
import { useEffect, useState } from "react";

export default function About() {

    // if selected
    const [selected, setSelected] = useState("aboutme")

    const list = [
        {
            id: "aboutme",
            title: "About Me",
        },
        {
            id: "education",
            title: "Education",
        },
        {
            id: "experience",
            title: "Experience",
        },
    ];

    return (
        <div className="about" id="about">
            <h1>Yi-Ting, Wang</h1>
            <ul>
                {/* item means each element in this list
                    then, it passes title of each element
                    to AboutList.jsx */}
                {list.map( item => (
                    <AboutList 
                        title = {item.title} 
                        active = {selected == item.id} 
                        setSelected = {setSelected}
                        id = {item.id}
                        // pass whatever we need for AboutList.jsx
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://th.bing.com/th/id/R1921a746eec1e5595b0c3e1d127100ba?rik=60rpoS%2fL9v3m4w&pid=ImgRaw" alt=""/>
                    <h3>UCSD</h3>
                </div>
                <div className="item">
                    <img src="https://th.bing.com/th/id/R1921a746eec1e5595b0c3e1d127100ba?rik=60rpoS%2fL9v3m4w&pid=ImgRaw" alt=""/>
                    <h3>UCSD</h3>
                </div>
                <div className="item">
                    <img src="https://th.bing.com/th/id/R1921a746eec1e5595b0c3e1d127100ba?rik=60rpoS%2fL9v3m4w&pid=ImgRaw" alt=""/>
                    <h3>UCSD</h3>
                </div>
                <div className="item">
                    <img src="https://th.bing.com/th/id/R1921a746eec1e5595b0c3e1d127100ba?rik=60rpoS%2fL9v3m4w&pid=ImgRaw" alt=""/>
                    <h3>UCSD</h3>
                </div>
                <div className="item">
                    <img src="https://th.bing.com/th/id/R1921a746eec1e5595b0c3e1d127100ba?rik=60rpoS%2fL9v3m4w&pid=ImgRaw" alt=""/>
                    <h3>UCSD</h3>
                </div>
                <div className="item">
                    <img src="https://th.bing.com/th/id/R1921a746eec1e5595b0c3e1d127100ba?rik=60rpoS%2fL9v3m4w&pid=ImgRaw" alt=""/>
                    <h3>UCSD</h3>
                </div>
            </div>
        </div>
    )
}
