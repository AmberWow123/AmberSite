import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

    // for ityped function
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor:false,
            backDelay: 1000,        // wait for a while
            backSpeed: 50,          // go back faster
            strings: ["UC San Diego", "Computer Science", 
                "#TritonGrad2021", "Incoming Graduate", 
                "Taiwanese", "Tainan City", 
                "April, 28th", "Basketball", 
                "#GG4eva", "Me&U"
            ]
        });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/intro_photo.jpg" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    {/* <h2>University of California, San Diego</h2> */}
                    <h1>Yi-Ting, Wang</h1>
                    <h3>
                        <ArrowRightIcon className="iconArrRight"/>
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#background">
                    <ExpandMoreIcon className="iconExpand"/>
                    {/* use image as a button to go to project section */}
                    {/* <img arc="assets/xxx.jpg" alt=""></img> */}
                </a>
            </div>
        </div>
    )
}
