import '../styles/HomeItemList.css'
import {Link } from "react-router-dom";

function HomeItemList({movies}) {
    return (
        <div>        
            <div id="movies-item-list" className="mml-row-item">
                {
                    movies.map(movie => (
                        <Link to={`/movieDetails?id=${movie._id}`} key={`${movie._id}-home-item`}>
                            <div  className="">
                                <div  >
                                    <img className="mml-movie-item-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}


export default HomeItemList;