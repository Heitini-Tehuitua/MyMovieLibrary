import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory, setShow}) {
	return (
		<div className="mml-categories">

            <button onClick={() => setActiveCategory('') + setShow(false)} className="mml-accueil">Accueil</button>

			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value) + setShow(false)}
                className = "mml-custom-select"
            >
				<option value='' className="mml-custom-option">Categories</option>
				{categories.map((cat) => (
					<option className="mml-custom-option" key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			
		</div>
	)
}

export default Categories