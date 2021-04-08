import '../styles/FilmItem.css'

function FilmItem({currentMovie, selectMovie, UpdateSelectMovie, setShow}){

	function showDetail(currentMovie) {
		UpdateSelectMovie(currentMovie)
		console.log(`Taille Tab ${selectMovie }`)
	}

	function handleClick(){
		console.log(`Taille Tab ${selectMovie} 😀`)
	}
	return (
		<li key={currentMovie._id} className='mml-film-item' onClick={() => handleClick()}>
			<img className='mml-film-item-cover' src={currentMovie.posterLink} alt={`${currentMovie.title} cover`} />
			{currentMovie.title}
			<button onClick={() => UpdateSelectMovie(currentMovie) + setShow(true)}>Detail Film</button>
		</li>
	)
}


    
export default FilmItem