import '../styles/FilmItem.css'
import { BrowserRouter as Link} from "react-router-dom";

function FilmItem({id, cover, title, star, titleFilm, UpdateTitle, describe, setShow,movie}) {
	// function showDetail(cover, title, star,describe) {
	// 	const currentFilm = titleFilm.find((film) => film.title === title)
	// 	if (!currentFilm) {
	// 		UpdateTitle([
	// 			{ cover, title, star ,describe}
	// 		])
	
	// 	}
	// }
	
    return (

		<div className="mml-row-item">
			<Link to={`/movies?id=${movie._id}`}>
				<img className="mml-film-item-cover" src={movie.posterLink} alt={`${movie.title} cover`} />

				<p><a className="mml-title">{movie.title} </a> ({movie.releaseDate})</p>
				{/* <button onClick={() => showDetail(cover, title, star,describe) + setShow(true)}>Detail Film</button> */}
			</Link>
		
		</div>
	)
}


    
export default FilmItem