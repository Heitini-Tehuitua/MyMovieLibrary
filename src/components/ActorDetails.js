import React from 'react';
import { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import '../styles/ActorDetails.css'
import Chargement from './Chargement'
import moment from "moment";

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
        return (
          <div className="mml-home-loading-container">
              <Chargement />
          </div>
      )
    } else {
        const birthDate = new Date(actor.birthDate);
        console.log("Date :" , birthDate)
      return (
        <div >
          <div className="mml-actorDetails-row-container">
            <img className="mml-actorDetails-show-cover" src={actor.picture} alt={`${actor.lastname} ${actor.firstname} cover`} />
            <div className="mml-actorDetails-container">
              <span className="mml-actorDetails-link-title">
                {`${actor.firstname} ${actor.lastname}`} 
              </span>
              <p>Born : {moment(actor.birthDate, "YYYYMMDD").format('LL')}.</p>
              <p>Biography: {actor.biography}</p>
            </div>
          </div>
        </div>
      );
  }
}

export default ActorDetails;