import AboutList from "../2_about_list/AboutList";
import "./about.scss"
import { useEffect, useState } from "react";

import {
    aboutmeData, educationData, experienceData
} from "../data";


import styled from "styled-components";

export default function About() {

    // if selected (aboutme, education, experience)
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

    const [data, setData] = useState([])
    useEffect(() => {
        // change data list depends on what you select (aboutme, education, experience)
        switch(selected) {
            case "aboutme":
                setData(aboutmeData);
                break;
            case "education":
                setData(educationData);
                break;
            case "experience":
                setData(experienceData);
                break;
            default:
                setData(aboutmeData);
        }

    }, [selected])  //  whenever you change what you select,
                    //  it will run the useeffect

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
            {/* below is for data list */}
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img 
                            src={d.img} 
                            alt=""/>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
