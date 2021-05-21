import BgList from "../2_bg_list/BgList";
import "./background.scss"
import { useEffect, useState } from "react";

import {
    locationData, educationData, experienceData, achievementData
} from "../data";


import styled from "styled-components";
import Modal from "../2_modal/Modal";
export default function Backgound({modalOpen, setModalOpen, set_modal_title, set_modal_des, set_modal_img, set_modal_content}) {

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

    // const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="background" id="background">
            <h1>.</h1>
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
                    
                    <div className="item" onClick={() => {
                        setModalOpen(!modalOpen);
                        set_modal_title(d.modalTitle);
                        set_modal_des(d.modalDescription);
                        set_modal_img(d.modalImg);
                        set_modal_content(d.modalContent);
                    }}>
                        
                        <img 
                            src={d.img} 
                            alt=""
                            
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
            
                
            {/* {data.map((d) => (
                <div className="container">        
                    <div className="item" onClick={() => {
                        setModalOpen(!modalOpen);
                        modal_title=d.modalTitle;
                        modal_img=d.modalImg;
                        modal_content=d.modalContent;
                    }}>
                        
                        <img 
                            src={d.img} 
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                </div>
            ))} */}
            




            {/* <div className="modaldiv">
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}
                    title={modal_title}
                    imgsrc={modal_img}
                    content={modal_content}
                />
            </div> */}
        </div>
    )
}
