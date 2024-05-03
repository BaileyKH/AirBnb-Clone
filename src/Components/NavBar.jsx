import '../App.css'

import logo from '/src/assets/airbnb 1.png'

export const NavBar = () => {
    return(
        <div className="nav">
            <img className="nav-logo" src={logo}/>
        </div>
    );
}