import '../styles/ActorsList.css'
import { React, useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Chargement from './Chargement'

function ActorsList() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    const randomShow = getRandomInt(5);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoaded2, setIsLoaded2] = useState(false);
    const [movies, setMovies] = useState([]);
    const [actors, setActors] = useState([]);
  // Fetching data
    console.log(`Fetching data from ${process.env.REACT_APP_SERVER_API}...`);
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + "/movies")
        .then(res => res.json())
        .then(
            (result) => {
            console.log("Result : ", result);
            setIsLoaded(true);
            setMovies(result);
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )

        fetch(process.env.REACT_APP_SERVER_API + "/peoples")
        .then(res => res.json())
        .then(
            (result) => {
            console.log("Result : ", result);
            setIsLoaded2(true);
            setActors(result);
            },
            (error) => {
            setIsLoaded2(true);
            setError(error);
            }
        )

    }, [])

    console.log("Fetching movies & peoples OK !");
    
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded && !isLoaded2) {
        return (
            <div className="mml-home-loading-container">
                <Chargement />
            </div>
        )
    } else {
        console.log(`Actors ${movies}...`);
        return (
            <div className="mml-moviesList-container">
                <div id="actors" className="mml-actorsList-container">
                    <div className="mml-actorsList-show-container" id="showContainer">
                        {movies.map(movie => (
                            movie._id === `${randomShow}` ?(
                                <img className="mml-actorsList-show-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
                        ) : null))}
                    </div>
                    <h3>List of Actors</h3>
                    {
                        <div className="mml-actor-row-item">
                            {actors.map(actor => (
                                <Link to={`/actorDetails?id=${actor._id}`}>
                                    <div key={actor._id} className="mml-container-badge">
                                        <div >
                                            <img className="mml-actor-item-cover" src={actor.picture} alt={`${actor.lastname}  ${actor.lastname} cover`} />
                                        </div>
                                        <span>{actor.firstname} {actor.lastname}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    }
                </div>
            </div>
        )}
}

export default ActorsList;