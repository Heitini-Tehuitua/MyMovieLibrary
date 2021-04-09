import React from 'react';
import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import '../styles/MovieDetails.css'

function ActorDetails() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [actor, setActor] = useState([]);
  let query = new URLSearchParams(useLocation().search);
  useEffect(() => {
    let actorID = query.get("id");

    console.log('Query : ', query);
    console.log(`Movie ID : ${actorID}`);
    console.log(`Fetching actor details from ${process.env.REACT_APP_SERVER_API}...`);

    fetch(process.env.REACT_APP_SERVER_API + `/peoples?_id=${actorID}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result : ", result);
          setIsLoaded(true);
          setActor(result[0]);
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
        console.log("Actor :" , actor)
      return (
        <div >
          { !isLoaded ? ( <div>Chargement...</div> ) : ( 
                
            <div id="actors" className="mml-detailMovie-container">
                <div className="mml-detailMovie-show-container" id="showContainer">
                    <img className="mml-detailMovie-show-cover" src={actor.picture} alt={`${actor.lastname} ${actor.firstname} cover`} />
                </div>
                <ul>
                  <li className="mml-title">
                    {actor.lastname} ({actor.firstnamee})
                  </li>
                </ul>
            </div>
            )}
        </div>
      );
  }
}

export default ActorDetails;