import '../styles/ActorsList.css'
import {Link} from "react-router-dom";
import DisplayCover from './DisplayCover';
import {useState, useEffect } from "react";
import Chargement from './Chargement';

function ActorsList() {
    
    const [movies, setMovies] = useState([])
    const [peoples, setPeoples] = useState([])
    const [error, setError] = useState(null);
    const [error2, setError2] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 
    const [isLoaded2, setIsLoaded2] = useState(false); 

    // Fetching data
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
    }, []);

    if (error || error2) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded || !isLoaded2) {
        return(
            <div className="mml-loading-container">
                <Chargement />
            </div>
        )
    } else {
        return (
            <div className="mml-moviesList-container">
                <div id="actors" className="mml-actorsList-container">
                    <DisplayCover movies={movies}/>
                    
                    <Link to='/formPeopleInsert'>
                        <h3>List of Actors</h3>
                    </Link>
                    {
                        <div className="mml-actor-row-item">
                            {peoples.map(actor => (
                                <Link to={`/actorDetails?id=${actor._id}`}>
                                    <div key={actor._id} className="mml-container-badge">
                                        <div >
                                            <img className="mml-actor-item-cover" src={actor.picture} alt={`${actor.lastname}  ${actor.lastname} cover`} />
                                        </div>
                                        <span>{actor.firstname} {actor.lastname}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default ActorsList;