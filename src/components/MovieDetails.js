import {Link, useLocation} from "react-router-dom";
import '../styles/MovieDetails.css'
import Trailer from './Trailer'
import {useState, useEffect } from "react";
import Chargement from "./Chargement";

function MovieDetails() {
  var query = new URLSearchParams(useLocation().search);
  const [currentMovie, setMovie] = useState([])
  const [peoples, setPeoples] = useState([])
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); 
  const [isLoaded2, setIsLoaded2] = useState(false); 

    // Fetching data
  useEffect(() => {
      let movieID = query.get("id");

      fetch(process.env.REACT_APP_SERVER_API + "/movieDetails?id=" + movieID)
      .then(res => res.json())
      .then(
          (result) => {
              if(result.error){
                setError(result.error);
                console.log(result.error)
              } else {

                console.log("Result : ", result);
                setMovie(result)
                setIsLoaded(true);
                console.log("MovieD Result :" + result[0])
              }
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
        setError2(error);
        setIsLoaded2(true);
      }
    )
      console.log("Fetching movies OK !");
  }, [])
  
  function time_convert(num)
  { 
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    return hours + "h" + minutes + "min";         
  }

  function formGenre(type){
      switch (type) {
        case "fantasy": return (
          "Fantasy"
        )
        case "drama": return (
          "Drama"
        )
        case "crime": return (
          "Crime"
        )
        case "adventure": return (
          "Adventure"
        )
        case "action": return (
          "Action"
        )
        case "romance": return (
          "Romance"
        )
        default: return (
            null
        )
      }
  }
  if (error || error2) {
    return <div>Erreur : {error}</div>;
  } else if (!isLoaded || !isLoaded2) {
      return(
          <div className="mml-loading-container">
              <Chargement />
          </div>
      )
  } else {
  return (
    <div >
        <div>
          <div className="mml-detailMovie-container">
              <div className="mml-detailMovie-show-container" id="showContainer">
                  <img  key ={`${currentMovie._id}`} className="mml-detailMovie-show-cover" src={currentMovie.posterLink} alt={`${currentMovie.title} cover`} />
              </div>

              <div className="mml-movieDetails-trailer">
                <Trailer  trailerLink = {currentMovie.trailerLink}/>
              </div>
              
          </div>

          <div className="mml-movieDetails-container">
            <span className="mml-movieDetails-link-title">
              {currentMovie.title} ({currentMovie.releaseDate})
            </span>
            <span className="mml-movieDetails-link" key={`${currentMovie.id}`}>
              {`Duration : ${time_convert(currentMovie.duration)}`}
              <p>Genres : 
                {currentMovie.genre && currentMovie.genre.length > 1? (
                    currentMovie.genre && currentMovie.genre.map(genre => 
                        " | " + formGenre(`${genre}`)
                    )
                  ) : " "+ formGenre(`${currentMovie.genre}`)}
                </p>
              </span>
                
            <span className="mml-movieDetails-link-synopsis"><p>{currentMovie.synopsis}</p></span>
          </div>

          <Link to={`/formMovie?id=${currentMovie._id}`}>
            <p>Update Movie</p>
          </Link>

          <h2>Directed By</h2>
          <div className="mml-movieDetails-row-item">
            {peoples.map(people =>(
                (people._id === currentMovie.directors[0].id)?(
                <Link to={`/actorDetails?id=${people._id}`} key={`${people._id}-directorID`}>
                  <div key={people._id} className="mml-movieDetails-container-badge">
                      <div >
                          <img className="mml-movieDetails-item-cover" src={people.picture} alt={`${people.lastname}  ${people.lastname} cover`} />
                      </div>
                      <span>{people.firstname} {people.lastname}</span>
                  </div>
                </Link>):null
              ))
            }
          </div>

          <h2>Actors</h2>
          
          <div className="mml-movieDetails-row-item">
            {currentMovie.actors.map(actorM =>
                (
                  peoples.map(actorP =>(
                      (actorM.id === actorP._id)?(
                      <Link to={`/actorDetails?id=${actorP._id}`} key={`${actorP._id}-actorID`}>
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
  )}
}

export default MovieDetails;