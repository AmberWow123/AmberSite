import "./projects.scss"
import { useState } from "react";

export default function Projects() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data =[
        {
            id: "1",
            icon: "./assets/project_android_studio.png", 
            title: "Drifting Mobile App", 
            tool: "Java | Firebase | Android Studio",
            desc: "Developed an android application using Firebase as our database and Android Studio for designing the user interface to help people social during the COVID-19 pandemic.",
            img: "./assets/project_drifting_bottle.jpg",
            srclink: "https://github.com/AmberWow123/Drifting",
        },
        {
            id: "2",
            icon: "./assets/project_jupyter.png", 
            title: "COVID-19 Analysis", 
            tool: "Python | Jupyter Notebook",
            desc: "Analyzed the information of COVID-19 confirmed cases and incoming flights in the United States using Python on Jupyter Notebook.",
            img: "./assets/project_Covid-19.jpg",
            srclink: "https://github.com/AmberWow123/Projects/tree/main/Python%20COVID-19%20data%20analysis%20project",
        },
        {
            id: "3",
            icon: "./assets/project_eclipse.png", 
            title: "Boba Shop Search Engine", 
            tool: "Python | Eclipse | SQLite3",
            desc: "An application filtering out boba shops in the surrounding area of De Anza College, which includes Cupertino, San Jose, Mountain View, Palo Alto, Santa Clara, Sunnyvale, Saratoga.",
            img: "./assets/project_boba.jpg",
            srclink: "https://github.com/AmberWow123/Boba-Shop-Search-Engine",
        },
    ];

    // define the onclick function
    const handleClick = (way) => {
        // for left
        //      if it is not the first slide, if so, then just switch to prev one
        //      if not, switch to the last slide
        // for right
        //      if it is not the last slide, if so, then switch to the next one
        //      if not, switch to the first slide
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : data.length -1) : 
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0)
        // if we have 3 in data, then currentSlide would only be either 0, 1, or 2
    }

    return (
        <div className="projects" id="projects">
            {/* the first slide would be in the first 100vw, second for second 100vw, and so on
                then, we have 'id' to indicate which slide it is
                and use this 'id' to show the corresponding slide in the screen */}
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (

                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img 
                                            src={d.icon}
                                            alt=""
                                        />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <h6>{d.tool}</h6>
                                    <p>{d.desc}</p>
                                    {/* <span>Project</span> */}
                                    <span><a href={d.srclink}>Project</a></span>
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={d.img}
                                    alt="" 
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img 
                src="assets/project_arrow.png" 
                className="arrow left" 
                alt=""
                onClick={()=>handleClick("left")}
            />
            <img 
                src="assets/project_arrow.png" 
                className="arrow right" 
                alt=""
                onClick={()=>handleClick()}
            />
        </div>
    )
}
