import "./materials.scss"

export default function Materials() {

    const leftdata = [
        {
            id: "1",
            title: "Resume",
            filesrc: "assets/materials_resume.pdf",
        },
        {
            id: "2",
            title: "履歷",
            filesrc: "assets/materials_resume.pdf",
        },
    ];

    const rightdata = [
        {
            id: "1",
            title: "De Anza Transcript",
            filesrc: "assets/materials_DA_transcript.pdf",
        },
        {
            id: "2",
            title: "UCSD Transcript",
            filesrc: "assets/materials_UCSD_transcript.pdf",
        },
    ];

    return (
        <div className="materials" id="materials">
            <div className="left">    
                <div className="leftContainer">
                    {leftdata.map( (ld) => (
                        <li>
                            {ld.title}
                        </li>
                    ))}    
                </div>            
                
            </div>
            <div className="middle">
                <iframe 
                    src="assets/materials_DA_transcript.pdf">
                    className="viewer"
                </iframe>
            </div>

            <div className="right">
                <div className="rightContainer">
                    {rightdata.map( (rd) => (
                        <li>
                            {rd.title}
                        </li>
                    ))}
                </div>
                
            </div>
            
        </div>
    )
}
