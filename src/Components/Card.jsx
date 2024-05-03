import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Card = (props) => {
    return(
        <div className="card-container">
            <img src={props.img} 
                 className="card-image"
                 alt="Image of Katie Zaferes"/>
            <div className="card-stats">
                <FontAwesomeIcon icon={faStar} style={{color: "#fe395c",}} />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}