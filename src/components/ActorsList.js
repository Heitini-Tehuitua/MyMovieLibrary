import '../styles/ActorsList.css'
import {Link} from "react-router-dom";
import DisplayCover from './DisplayCover';

function ActorsList({data}) {
    
    const movies = data[0];
    const actors = data[1];
    
    return (
        <div className="mml-moviesList-container">
            <div id="actors" className="mml-actorsList-container">
                <DisplayCover movies={movies}/>
                <h3>List of Actors</h3>
                {
                    <div className="mml-actor-row-item">
                        {actors.map(actor => (
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

export default ActorsList;