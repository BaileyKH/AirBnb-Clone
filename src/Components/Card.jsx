import '../App.css'

import { cards } from '/src/CardData.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Card = () => {
    return(
        <div className="card-container">
            <div className="cards-inner">
            {cards.map((card) => (
                <div key={card.id}>
                    {!card.openSpots && <div className="card-badge">SOLD OUT</div>}
                    <img src={card.img} 
                        className="card-image"
                        alt="Image of Katie Zaferes"/>
                    <div className="card-stats">
                        <FontAwesomeIcon icon={faStar} style={{color: "#fe395c",}} />
                        <span>{card.rating}</span>
                        <span className="gray">({card.reviewCount}) • </span>
                        <span className="gray">{card.country}</span>
                    </div>
                    <h2>{card.title}</h2>
                    <p><span className="bold">From ${card.price}</span> / person</p>
                </div>
            ))}
            </div>
        </div>
    );
}
