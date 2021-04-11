import { React, useState, useEffect } from "react";
import '../styles/Home.css'
import HomeItemList from './HomeItemList'
import Chargement from './Chargement'

function Home() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    const randomShow = getRandomInt(5);

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
        console.log("Fetching movies OK !");
    }, [])

    
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return ( 
            <div className="mml-home-loading-container">
                <Chargement />
            </div>
            )
    } else {
        return (
            <div className="mml-home-container">
                <h2>Home</h2>
                    <div className="mml-home-show-container" id="showContainer">
                        {movies.map(movie => (
                            movie._id === `${randomShow}` ?(
                                <img className="mml-home-movie-show-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
                        ) : null))}
                    </div>
                <HomeItemList />
            </div>
        )
    }
}

export default Home;