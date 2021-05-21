import { MenuOpen } from "@material-ui/icons"
import "./modal.scss"
import CloseIcon from '@material-ui/icons/Close';


export default function modal({modalOpen, setModalOpen}) {
    return (
        <div className={"modal " + (modalOpen && "active")}>
            asfas
            <CloseIcon 
                className="closeicon"
                onClick={() => setModalOpen(!modalOpen)}
            />
        </div>
    )
}
