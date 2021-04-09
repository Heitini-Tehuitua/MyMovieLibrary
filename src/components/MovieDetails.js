import React from 'react';
import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import '../styles/MovieDetails.css'
import {Link} from "react-router-dom";

function MovieDetails() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [movie, setMovie] = useState([]);
  const [peoples, setPeoples] = useState([]);
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
          setMovie(result[0]);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
    
    fetch(process.env.REACT_APP_SERVER_API + `/peoples`)
      .then(res => res.json())
      .then(
        (result) => {
          setPeoples(result);
          setIsLoaded2(true);
        },
        (error) => {
          setError(error);
          setIsLoaded2(true);
        }
      )
      console.log("Fetching movie details OK !");
  }, [])
  console.log("Movie" , peoples);
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded && !isLoaded2) {
        return <div>Chargement...</div>;
    } else {
      return (
        <div >
            <div>
              <div id="movies" className="mml-detailMovie-container">
                  <div className="mml-detailMovie-show-container" id="showContainer">
                      <img className="mml-detailMovie-show-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
                  </div>
                  <div className="mml-movieDetails-container">
                    <span className="mml-movieDetails-link-title">
                      {movie.title} ({movie.releaseDate})
                    </span>
                    <span className="mml-movieDetails-link" key={`${movie.id}`}>
                      {`duration : ${movie.duration}min`}
                      <p>genre : 
                        {movie.genre && movie.genre.length > 1? (
                            movie.genre && movie.genre.map(genre => 
                                " | " + genre.toUpperCase()
                            )
                          ) : movie.genre}
                        </p>
                      </span>
                        
                    <span className="mml-movieDetails-link-synopsis"><p>{movie.synopsis}</p></span>
                  </div>
              </div>

              <h2>List of Actors</h2>
              
              <div className="mml-movieDetails-row-item">
                {movie.actors && movie.actors.map(actorM =>
                    (
                      peoples.map(actorP =>(
                          (actorM.id === actorP._id)?(
                          <Link to={`/actorDetails?id=${actorP._id}`}>
                            <div key={actorP._id} className="mml-movieDetails-container-badge">
                                <div >
                                    <img className="mml-movieDetails-item-cover" src={actorP.picture} alt={`${actorP.lastname}  ${actorP.lastname} cover`} />
                                </div>
                                <span>{actorP.firstname} {actorP.lastname}</span>
                            </div>
                          </Link>):null
                      ))
                    )
                )}
              </div>
            </div> 
        </div>
      );
  }
}

export default MovieDetails;