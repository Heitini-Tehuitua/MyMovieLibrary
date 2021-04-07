import '../styles/FilmItem.css'
import NoteScale from './NoteScale'

function handleClick(filmName){
    console.log(`Nom du film ${filmName} 😀`)
}

function FilmItem({id, cover, title, star, titleFilm, UpdateTitle}) {
	function showDetail(cover, title, star) {
		const currentFilm = titleFilm.find((film) => film.title === title)
		if (!currentFilm) {
			UpdateTitle([
				{ cover, title, star }
			])
	
		}
	}
	
    return (
		<li key={id} className='mml-film-item' onClick={() => handleClick(title)}>
			<img className='mml-film-item-cover' src={cover} alt={`${title} cover`} />
			{title}
            <NoteScale scaleValue={star} />
			<button onClick={() => showDetail(cover, title, star)}>Detail Film</button>
		</li>
	)
}


    
export default FilmItem