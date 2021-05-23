import "./skills.scss"

export default function Skills() {

    const data = [
        {
            id: "1",
            title: "Python",
            imgsrc: "./assets/skills_python.png",
        },
        {
            id: "2",
            title: "Java",
            imgsrc: "./assets/skills_java.png",
        },
        {
            id: "3",
            title: "SQLite3",
            imgsrc: "./assets/skills_sqlite.jpg",
        },
        {
            id: "4",
            title: "PostgreSQL",
            imgsrc: "./assets/skills_postgresql.png",
        },
        {
            id: "5",
            title: "C",
            imgsrc: "./assets/skills_c.png",
        },
        {
            id: "6",
            title: "C++",
            imgsrc: "./assets/skills_cpp.png",
        },
        {
            id: "7",
            title: "HTML",
            imgsrc: "./assets/skills_html.jpg",
        },
        {
            id: "8",
            title: "CSS",
            imgsrc: "./assets/skills_css.png",
        },
        {
            id: "9",
            title: "React",
            imgsrc: "./assets/skills_react.png",
        },
        {
            id: "10",
            title: "Git",
            imgsrc: "./assets/skills_git.jpg",
        },
        {
            id: "11",
            title: "JSP",
            imgsrc: "./assets/skills_jsp.png",
        },
        {
            id: "12",
            title: "Apache Tomcat",
            imgsrc: "./assets/skills_tomcat.png",
        },
        {
            id: "13",
            title: "Android",
            imgsrc: "./assets/skills_android_studio.png",
        },
    ];


    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="container">
                <div className="item">
                    <img src="./assets/skills_python.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./assets/skills_python.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./assets/skills_python.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./assets/skills_python.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./assets/skills_python.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./assets/skills_python.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./assets/skills_python.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./assets/skills_python.png" alt=""/>
                </div> 
            </div>
        </div>
    )
}
