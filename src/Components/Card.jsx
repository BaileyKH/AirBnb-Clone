import '../App.css'

import swimmer from '/src/assets/card images/image 12.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Card = () => {
    return(
        <div className="card-container">
            <img src={swimmer} 
                 className="card-image"
                 alt="Image of Katie Zaferes"/>
            <div className="card-stats">
                <FontAwesomeIcon icon={faStar} style={{color: "#fe395c",}} />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <h2>Life lessons with Katie Zaferes</h2>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}