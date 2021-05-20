import AboutList from "../2_about_list/AboutList";
import "./about.scss"

export default function About() {

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
                    <AboutList title = {item.title} />
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
