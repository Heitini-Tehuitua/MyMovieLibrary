import '../styles/DisplayCover.css'
import {useState, useEffect } from "react";
import Chargement from "./Chargement";

function DisplayCover() {
    
    const [movie, setMovie] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + "/movieRandom")
        .then(res => res.json())
        .then(
            (result) => {
                console.log("Result : ", result);
                setMovie(result)
                setIsLoaded(true);
            },
            (error) => {
                setError(error);
                setIsLoaded(true);
            }
        )
        console.log("Fetching movies OK !");
    }, []);
    
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return(
            <div className="mml-loading-container">
                <Chargement />
            </div>
        )
    } else {
        return (
            <div className="mml-display-container" id="showContainer">
                <img key="display_cover" className="mml-display-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
            </div>
        )
    }
}
export default DisplayCover;