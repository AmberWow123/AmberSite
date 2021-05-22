import "./projects.scss"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img 
                                        src="assets/project_mobile.png" 
                                        alt=""
                                    />
                                </div>
                                <h2>Title</h2>
                                <p>this is description</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
