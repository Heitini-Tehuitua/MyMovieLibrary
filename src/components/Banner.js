import './../styles/Banner.css';
import logo from '../assets/myflix.png';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";

function Banner(){
    return(
        <div>
            <nav >
                <ul className="mml-banner">
                    <li key="mml-logo-picture"className="mml-banner-link-choice">
                        <img src = {logo} alt='My Movie Library' className = "mml-logo" />
                    </li>
                    <li  key="mml-accueil-link" className="mml-banner-link-choice">
                        <Link to="/home">Accueil</Link>
                    </li>
                    <li  key="mml-movies-link" className="mml-banner-link-choice">
                        <Link to="/movies">Films</Link>
                    </li>
                    <li key="mml-actors-link" className="mml-banner-link-choice">
                        <Link to="/actors">Acteurs</Link>
                    </li>
                    <li key="mml-writers-link" className="mml-banner-link-choice">
                        <Link to="/writers">Scénaristes</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


// function Banner({activeCategory, setActiveCategory, setShow}){
//     const categories = filmList.reduce(
// 		(acc, film) =>
// 			acc.includes(film.category) ? acc : acc.concat(film.category),
// 		[]
// 	)
//     const title = "My Movie Library"
//     return (     
//         <div className="mml-banner">
//             <img src = {logo} alt='My Movie Library' className = "mml-logo" />
//             <Categories
// 				categories={categories}
// 				setActiveCategory={setActiveCategory}
// 				activeCategory={activeCategory}
//                 setShow = {setShow}
// 			/>
//             <h1> { title } </h1>
//         </div>
//     )
// }

export default Banner