import BgList from "../2_bg_list/BgList";
import "./background.scss"
import { useEffect, useState } from "react";

import {
    locationData, educationData, experienceData, achievementData
} from "../data";


import styled from "styled-components";

export default function Backgound() {

    // if selected (location, education, experience)
    const [selected, setSelected] = useState("location")

    const list = [
        {
            id: "location",
            title: "Location",
        },
        {
            id: "education",
            title: "Education",
        },
        {
            id: "experience",
            title: "Experience",
        },
        {
            id: "achievements",
            title: "Achievements",
        },
    ];

    const [data, setData] = useState([])
    useEffect(() => {
        // change data list depends on what you select (location, education, experience)
        switch(selected) {
            case "location":
                setData(locationData);
                break;
            case "education":
                setData(educationData);
                break;
            case "experience":
                setData(experienceData);
                break;
            case "achievements":
                setData(achievementData);
                break;
            default:
                setData(locationData);
        }

    }, [selected])  //  whenever you change what you select,
                    //  it will run the useeffect

    return (
        <div className="background" id="background">
            <h1>Yi-Ting, Wang</h1>
            <ul>
                {/* item means each element in this list
                    then, it passes title of each element
                    to BgList.jsx */}
                {list.map( item => (
                    <BgList 
                        title = {item.title} 
                        active = {selected == item.id} 
                        setSelected = {setSelected}
                        id = {item.id}
                        // pass whatever we need for BgList.jsx
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
