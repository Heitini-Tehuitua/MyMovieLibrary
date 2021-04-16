import '../styles/HomeItemList.css'
import {Link } from "react-router-dom";
import {useState, useEffect } from "react";
import Chargement from "./Chargement";

function HomeItemList() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + "/movies")
        .then(res => res.json())
        .then(
            (result) => {
                console.log("Result : ", result);
                setMovies(result)
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
            <div>        
                <div id="movies-item-list" className="mml-row-item">
                    {
                        movies.map(movie => (
                            <Link to={`/movieDetails?id=${movie._id}`} key={`${movie._id}-home-item`}>
                                <div  className="">
                                    <div  >
                                        <img className="mml-movie-item-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default HomeItemList;