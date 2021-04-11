import giphy from '../assets/giphy2.gif';
import './../styles/Chargement.css';

function Chargement(){

    return(
        <div className="mml-giphy-container">
            <img src = {giphy} alt='My Movie Library' className = "mml-giphy" />

            <span className="mml-chargement">Chargement...</span>
        </div>
    )
}

export default Chargement;