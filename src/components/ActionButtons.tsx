import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';




export default function ActionButtons(){
    return(
        <div className="action-button-container">
            <button className="email-button custom-button-padding action-button"><FontAwesomeIcon icon={faCoffee} /> Email</button>
            <button className="linkedin-button custom-button-padding action-button"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
        </div>
        
    )
}