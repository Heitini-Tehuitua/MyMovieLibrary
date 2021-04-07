import './../styles/Banner.css';
import logo from '../assets/myflix.png';
import { filmList } from '../datas/filmList'
import Categories from './Categories'


function Banner({activeCategory, setActiveCategory, setShow}){
    const categories = filmList.reduce(
		(acc, film) =>
			acc.includes(film.category) ? acc : acc.concat(film.category),
		[]
	)
    const title = "My Movie Library"
    return (     
        <div className="mml-banner">
            <img src = {logo} alt='My Movie Library' className = "mml-logo" />
            <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
                setShow = {setShow}
			/>
            <h1> { title } </h1>
        </div>
    )
}

export default Banner