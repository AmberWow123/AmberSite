import "./menubar.scss"
// import PersonIcon from '@material-ui/icons/Person';
// import MailIcon from '@material-ui/icons/Mail';
import {Person, Mail} from "@material-ui/icons"

export default function Menubar() {
    return (
        <div className="menubar  active">
            <div className="wrapper">
                <div className="left">
                    {/* make a link for such that each click will return back to the intro page */}
                    <a href="#intro" className="logo">Eatingwow</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+886 9 56816556</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>eatingwow@gmail.com</span>
                    </div>
                </div>
                <h1>Hello</h1>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
