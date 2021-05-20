import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/intro_photo.jpg" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>UCSD Computer Science Undergrad</h2>
                    <h1>Yi-Ting, Wang</h1>
                    <h3>sdasdasd <span>ABC</span></h3>
                </div>
                <a href="#skills">
                    <ExpandMoreIcon className="icon"/>
                    {/* use image as a button to go to project section */}
                    {/* <img arc="assets/xxx.jpg" alt=""></img> */}
                </a>
            </div>
        </div>
    )
}
