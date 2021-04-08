import { BrowserRouter as Link} from "react-router-dom";
import { React, useState, useEffect } from "react";
import '../styles/Home.css'

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    const [selectMovie, UpdateSelectMovie] = useState("1");

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
    }, [])

    console.log("Fetching movies OK !");
    
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <div className="mml-home-container">
                <h2>Home</h2>
                { !isLoaded ? ( <div>Chargement...</div> ) : ( 

                    <div>
                        {movies.map(movie => (
                            movie._id === selectMovie ?(
                                <div className="mml-show-container" id={movie._id}>
                                    <img className="mml-movie-show-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
                                </div>
                            
                            
                        ) : null))}
                    </div>
                )}
            </div>
        )
    }
}

export default Home;