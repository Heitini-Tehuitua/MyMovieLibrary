import {Link, useLocation} from "react-router-dom";
import '../styles/MovieDetails.css'
import Trailer from './Trailer'

function MovieDetails({data}) {
  var query = new URLSearchParams(useLocation().search);
  var currentMovie;
  let movieID = query.get("id");

  const movies = data[0];
  const peoples = data[1];
  
  movies.map(movie =>
    {if(movie._id === movieID){  
      return currentMovie = movie;
    }else{
      return null;
    }
  });
  
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

          <h2>List of Actors</h2>
          
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
  );
}

export default MovieDetails;