import "./materials.scss"
import { useEffect, useState } from "react";

export default function Materials() {

    const leftdata = [
        {
            id: "resume",
            title: "Resume",
            filesrc: "assets/materials_resume.pdf",
        },
        {
            id: "履歷",
            title: "履歷",
            filesrc: "assets/materials_resume.pdf",
        },
    ];

    const rightdata = [
        {
            id: "datranscript",
            title: "De Anza Transcript",
            filesrc: "assets/materials_DA_transcript.pdf",
        },
        {
            id: "ucsdtranscript",
            title: "UCSD Transcript",
            filesrc: "assets/materials_UCSD_transcript.pdf",
        },
    ];

    const [selected, setSelected] = useState("resume")
    const [fileSrc, setFileSrc] = useState("assets/materials_resume.pdf");

    useEffect(() => {
        switch(selected) {
            case "resume":
                setFileSrc("assets/materials_resume.pdf");
                break;
            case "履歷":
                setFileSrc("assets/materials_resume.pdf");
                break;
            case "datranscript":
                setFileSrc("assets/materials_DA_transcript.pdf");
                break;
            case "ucsdtranscript":
                setFileSrc("assets/materials_UCSD_transcript.pdf");
                break;
            default:
                setFileSrc("assets/materials_resume.pdf");
        }
    }, [selected])

    return (
        <div className="materials" id="materials">
            <div className="left">    
                <div className="leftContainer">
                    {leftdata.map( (ld) => (
                        <li className={(selected === ld.id) ? "li active" : "liside"}
                            onClick={() => setSelected(ld.id)}
                        >
                            {ld.title}
                        </li>
                    ))}    
                </div>            
                
            </div>
            <div className="middle">
                <iframe 
                    src={fileSrc}>
                    className="viewer"
                </iframe>
            </div>

            <div className="right">
                <div className="rightContainer">
                    {rightdata.map( (rd) => (
                        <li className={(selected === rd.id) ? "li active" : "liside"}
                            onClick={() => setSelected(rd.id)}
                        >
                        {rd.title}
                    </li>
                    ))}
                </div>
                
            </div>
            
        </div>
    )
}
