import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FormMovie.css';
import {Link, useLocation} from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import Chargement from "./Chargement";

function FormMovie() {

    let title = useRef(null)
    let synopsis = useRef(null)
    let releaseDate = useRef(null)
    let duration = useRef(null)
    let posterLink = useRef(null)
    let trailerLink = useRef(null)
      

    var query = new URLSearchParams(useLocation().search);
    const [currentMovie, setMovie] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 

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
    }, [])

    function PostUpdate(){
        const requestOptions = {
            method : 'POST',
            headers : { 'Content-Type' : 'application/x-www-form-urlencoded' },
            body : new URLSearchParams({
                'id' : currentMovie._id,
                'title' : title.value,
                'synopsis' : synopsis.value,
                'releaseDate' : releaseDate.value,
                'genre' : currentMovie.genre,
                'duration' : duration.value,
                'posterLink' : posterLink.value,
                'trailerLink' : trailerLink.value,
                'directors' : currentMovie.directors,
                'writers' : currentMovie.writers,
                'actors' : currentMovie.actors
            })
        }
        fetch(process.env.REACT_APP_SERVER_API + '/movies/update', requestOptions)
            .then(response => {
                response.json()
                console.log(response)
            })
    }
    
    if (error) {
        return <div>Erreur : {error}</div>;
      } else if (!isLoaded) {
          return(
              <div className="mml-loading-container">
                  <Chargement />
              </div>
          )
      } else {
        return (
            <div>
                <p className="mml-signIn">Update Movie</p>
                <form className="mml-login-form">
                    <label className="mml-login-label">Title</label>
                    <input 
                        type="text" 
                        defaultValue={currentMovie.title}
                        className="mml-login-champs"
                        ref={value => title = value}
                    />
                    <label className="mml-login-label">Synopsis</label>
                    <textarea 
                        className="mml-login-champs"
                        defaultValue={currentMovie.synopsis}
                        ref={value => synopsis = value}
                    />
                    <label className="mml-login-label">Release Date</label>
                    <input 
                        className="mml-login-champs"
                        defaultValue={currentMovie.releaseDate}
                        type="number" min="1940" max="2021"
                        ref={value => releaseDate = value}
                    />
                    <label className="mml-login-label">Duration</label>
                    <input 
                        className="mml-login-champs"
                        defaultValue={currentMovie.duration}
                        type="number" min="100" max="400"
                        ref={value => duration = value}
                    />
                    <label className="mml-login-label" >PosterLink</label>
                    <input 
                        className="mml-login-champs"
                        defaultValue={currentMovie.posterLink}
                        type="url"
                        ref={value => posterLink = value}
                    />
                    <label className="mml-login-label" >TrailerLink</label>
                    <input 
                        className="mml-login-champs"
                        defaultValue={currentMovie.trailerLink}
                        type="url"
                        ref={value => trailerLink = value}
                    />
                </form>
                    <button className="mml-login-submit" onClick={PostUpdate}>Update</button>
            </div>
        )
    }

    
}

export default FormMovie