import './../styles/DetailsFilm.css'
import { useState } from 'react'
import NoteScale from './NoteScale'

function DetailsFilm({titleFilm, UpdateTitle}) {
	// const [Cover, UpdateCover] = useState("")
	// const [star, UpdateStar] = useState(0)
	const [isShow, setIsShow] = useState(false)
	return isShow ? (
		<div className = "mml-detailFilm">
			<button
				className='mml-detail-toggle-button'
				onClick={() => setIsShow(false)}
			>
				Fermer
			</button>
			{titleFilm.length  > 0? (
				<div>
					<h2>Détails du Film</h2>
					<ul>
						{titleFilm.map(({cover, title, star}, index) => (
							<div key={`${title}-${index}`} className ="mml-film-item">
								<img src={cover} alt={`${title} cover`}/>
								{title}
								<NoteScale scaleValue={star} />
							</div>	
						))}
					</ul>
					<button onClick={() => UpdateTitle([])}>Vider le détail</button>
				</div>
			) : (
				<div>Aucun Film à Afficher</div>
			)}
			
		</div>
	) : (
		<button onClick={() => setIsShow(true)}>Afficher le détail</button>
	)
}

export default DetailsFilm