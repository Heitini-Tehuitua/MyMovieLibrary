import '../styles/FilmItem.css'
import {Link} from "react-router-dom";

function FilmItem({movie}) {
    return (

		<Link to={`/movieDetails?id=${movie._id}`}>
			<div className="mml-row-movieItem" >
				<img className="mml-movieItem-cover" src={movie.posterLink} alt={`${movie.title} cover`} />

				<p className="mml-title-movieItem">
					{movie.title}({movie.releaseDate})
				</p>
			</div>
		</Link>
		
	)
}


    
export default FilmItem