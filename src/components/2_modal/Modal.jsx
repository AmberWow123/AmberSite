import { MenuOpen } from "@material-ui/icons"
import "./modal.scss"
import CloseIcon from '@material-ui/icons/Close';


export default function modal({modalOpen, setModalOpen}) {
    return (
        <div className={"modal " + (modalOpen && "active")}>
            
            <div className="modalHeader">
                <div className="modalTitle">
                    dfsjdfosjfsdjjdsf
                </div>
                <CloseIcon
                className="closeicon"
                onClick={() => setModalOpen(!modalOpen)}
                />
            </div>
            <div className="modalBody">
                <img
                    // src={}
                    src="https://th.bing.com/th/id/OIP.dnHRj-e4OEVfXt5aFFMA1QHaE6?pid=ImgDet&rs=1"
                    alt=""
                    className="modalImg"
                />
                <div className="modalContent">
                    asdasdasdasds
                </div>  
            </div>
            
            
        </div>
    )
}
