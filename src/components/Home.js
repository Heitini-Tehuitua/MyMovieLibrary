import { React, useState, useEffect } from "react";
import '../styles/Home.css'
import HomeItemList from './HomeItemList'

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    const [selectMovie, UpdateSelectMovie] = useState("4");

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
        return <div>Chargement...</div>;
    } else {
        return (
            <div className="mml-home-container">
                <h2>Home</h2>
                { !isLoaded ? ( <div>Chargement...</div> ) : ( 

                    <div className="mml-home-show-container" id="showContainer">
                        {movies.map(movie => (
                            movie._id === selectMovie ?(
                                <img className="mml-home-movie-show-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
                        ) : null))}
                    </div>

                )
                }



                <HomeItemList />
            </div>
        )
    }
}

export default Home;