import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';




export default function ActionButtons(){
    return(
        <div className="action-button-container">
            <button className="emailButton"><FontAwesomeIcon icon={faCoffee} /> Email</button>
            <button className="linkedinButton"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
        </div>
        
    )
}