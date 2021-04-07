import { filmList } from '../datas/filmList'
import FilmItem from './FilmItem'
import '../styles/ShoppingList.css'

function ShoppingList({titleFilm, UpdateTitle, activeCategory, setActiveCategory}) {

    // categories récupère les différentes categories de notre liste de film
    return (
        <div>
            <ul className='mml-film-list'>
                {filmList.map(({id, cover, title, star,category}) => 
                !activeCategory || activeCategory === category ?(
                    <div key={id}>
                        <FilmItem
                            id={id}
                            cover={cover}
                            title={title}
                            star={star}
                            titleFilm = {titleFilm}
                            UpdateTitle = {UpdateTitle}
                        />
                    </div>
                ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList