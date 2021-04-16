import {Link, useLocation} from "react-router-dom";
import {useState, useEffect } from "react";
import moment from "moment";
import Chargement from './Chargement';
import '../styles/ActorDetails.css';

function ActorDetails() {

  let query = new URLSearchParams(useLocation().search);
  const [currentActor, setActor] = useState([])
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); 
 
  useEffect(() => {
    let actorID = query.get("id");
    fetch(process.env.REACT_APP_SERVER_API + `/peopleDetails?id=${actorID}`)
      .then(res => res.json())
      .then(
      (result) => {
        if(result.error){
          setError(result.error);
          console.log(result.error)
        } else {

          console.log("Result : ", result);
          setActor(result)
          setIsLoaded(true);
          console.log("ActorD Result :" + result)
        }
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    )
    console.log("Fetching movies OK !");
  }, []);
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
      <div >
        <div className="mml-actorDetails-row-container">
          <img className="mml-actorDetails-show-cover" src={currentActor.picture} alt={`${currentActor.lastname} ${currentActor.firstname} cover`} />
          <div className="mml-actorDetails-container">
            <span className="mml-actorDetails-link-title">
              {`${currentActor.firstname} ${currentActor.lastname}`} 
            </span>
            <p>Born : {moment(currentActor.birthDate, "YYYYMMDD").format('LL')}.</p>
            <p>Biography: {currentActor.biography}</p>
          </div>
        </div>

        <Link to={`/formPeople?id=${currentActor._id}`}>
          <p>Update</p>
        </Link>
        <Link to={`/deletePeople?id=${currentActor._id}`}>
          <p>Delete</p>
        </Link>
      </div>
    )
  }
}

export default ActorDetails;