import '../styles/HomeItemList.css'
import { React, useState, useEffect } from "react";

function HomeItemList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
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
        console.log(`Movies ${movies}...`);
        return (
            <div className="">
                { !isLoaded ? ( <div>Chargement...</div> ) : ( 
                    
                    
                    <div id="movies-item-list" className="mml-row-item">
                        {
                            movies.map(movie => (
                                <div key={movie._id} className="">

                                    <div  >
                                        <img className="mml-movie-item-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        )}
}


export default HomeItemList;