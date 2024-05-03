import '../App.css'

import GroupPhoto from '/src/assets/Group 77.png'

export const Hero = () => {
    return(
        <div className="hero-container">
            <img src={GroupPhoto}/>
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts all without leaving home</p>
            </div>
        </div>
    );
}