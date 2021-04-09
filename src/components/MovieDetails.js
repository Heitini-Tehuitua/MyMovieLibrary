import React from 'react';
import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import '../styles/MovieDetails.css'

function MovieDetails() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movie, setMovie] = useState([]);
  let query = new URLSearchParams(useLocation().search);
  useEffect(() => {
    let movieID = query.get("id");

    console.log('Query : ', query);
    console.log(`Movie ID : ${movieID}`);
    console.log(`Fetching actor details from ${process.env.REACT_APP_SERVER_API}...`);

    fetch(process.env.REACT_APP_SERVER_API + `/movies?_id=${movieID}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result : ", result);
          setIsLoaded(true);
          setMovie(result[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      console.log("Fetching movie details OK !");
  }, [])
    
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        console.log("Movie :" , movie)
      return (
        <div >
          { !isLoaded ? ( <div>Chargement...</div> ) : ( 
                
            <div id="movies" className="mml-detailMovie-container">
                <div className="mml-detailMovie-show-container" id="showContainer">
                    <img className="mml-detailMovie-show-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
                </div>
                <ul>
                  <li className="mml-title">
                    {movie.title} ({movie.releaseDate})
                  </li>
                  <li>duration : {movie.duration}min</li>
                  <li>duration : {movie.duration}min | {movie.genre}</li>
                  <li><p>{movie.synopsis}</p></li>
                </ul>
                <div className="mml-trailer">

                </div>
            </div>
            )}
        </div>
      );
  }
}

export default MovieDetails;