import {useLocation} from "react-router-dom";
import '../styles/ActorDetails.css'
import moment from "moment";

function ActorDetails({data}) {

  let query = new URLSearchParams(useLocation().search);
  let actorID = query.get("id");
  const peoples = data[1];
  var currentActor;
  
  peoples.map(people =>
    {if(people._id === actorID){  
      return currentActor = people;
    }else{
      return null;
    }
  });

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
    </div>
  );
}

export default ActorDetails;