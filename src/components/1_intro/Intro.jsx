import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor:false,
            strings: ["Computer Science", "Incoming Graduate"]
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
                    <h2>University of California, San Diego</h2>
                    <h1>Yi-Ting, Wang</h1>
                    <h3>
                        <ArrowRightIcon className="iconArrRight"/>
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#skills">
                    <ExpandMoreIcon className="iconExpand"/>
                    {/* use image as a button to go to project section */}
                    {/* <img arc="assets/xxx.jpg" alt=""></img> */}
                </a>
            </div>
        </div>
    )
}
