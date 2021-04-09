import './../styles/Banner.css';
import logo from '../assets/myflix.png';
import FilmList from './FilmList';
import MovieDetails from './MovieDetails';
import Home from './Home'

import { BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";

function Banner(){

    return(
        <Router>
            <div>
                <nav>
                    <ul className="mml-banner">
                        <li className="mml-link-choice">
                            <img src = {logo} alt='My Movie Library' className = "mml-logo" />
                        </li>
                        <li className="mml-link-choice">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="mml-link-choice">
                            <Link to="/movies">Films</Link>
                        </li>
                        <li className="mml-link-choice">
                            <Link to="/actors">Acteurs</Link>
                        </li>
                        <li className="mml-link-choice">
                            <Link to="/writers">Scénaristes</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/movies">
                        <FilmList />
                    </Route>

                    <Route path="/movieDetails">
                        <MovieDetails />
                    </Route>
                    {/* <Route path="/actors">
                        <ActorsList />
                    </Route>
                    <Route path="/actorDetails">
                        <ActorDetails />
                    </Route> */}
                    {/* <Route path="/writers">
                        <WritersList />
                    </Route>
                    <Route path="/writerDetails">
                        <WriterDetails />
                    </Route> */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
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