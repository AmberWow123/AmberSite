import { MenuOpen } from "@material-ui/icons"
import "./modal.scss"
import CloseIcon from '@material-ui/icons/Close';


export default function modal({modalOpen, setModalOpen, title, imgsrc, content}) {
    return (
        <div className={"modal " + (modalOpen && "active")}>
            
            <div className="modalHeader">
                <div className="modalTitle">
                    {title}
                </div>
                <CloseIcon
                    className="closeicon"
                    onClick={() => setModalOpen(false)}
                />
            </div>
            <div className="modalBody">
                <p>
                    <img
                        src={imgsrc}
                        // src="https://th.bing.com/th/id/OIP.dnHRj-e4OEVfXt5aFFMA1QHaE6?pid=ImgDet&rs=1"
                        alt=""
                        className="modalImg"
                    />
                 </p>
                    
                <div className="modalContent">
                    {content}
                </div>  
            </div>
            
        </div>
    )
}
