import FilmItem from './FilmItem'
import Chargement from './Chargement'
import '../styles/FilmList.css'
import { React, useState, useEffect } from "react";

function FilmList() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    
    const randomShow = getRandomInt(5);
  // Fetching data
    console.log(`Fetching data from ${process.env.REACT_APP_SERVER_API}...`);
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + "/movies")
        .then(res => res.json())
        .then(
            (result) => {
            console.log("Result : ", result);
            setIsLoaded(true);
            setMovies(result);
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, [])

    console.log("Fetching movies OK !");
    
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div className="mml-home-loading-container">
                <Chargement />
            </div>
        )
    } else {
        console.log(`Movies ${movies}...`);
        return (
            <div className="mml-moviesList-container">
                <div id="movies">
                    <div className="mml-movieList-show-container" id="showContainer">
                        {movies.map(movie => (
                            movie._id === `${randomShow}` ?(
                                <img className="mml-movieList-show-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
                        ) : null))}
                    </div>
                    <h3>Liste des Films</h3>
                    {
                        movies.map(movie => (
                            <div key={movie._id} className="mml-movielist-movieItem-container">

                                <FilmItem
                                    movie={movie}
                                />
                
                            </div>
                        ))
                    }
                </div>
            </div>
        )}
}


    //   return isShow ?(
    
    //           <div>
    //               <h2>Détails du Film</h2>
    //               <ul>
    //                     <div key={selectMovie._id} className ="mml-film-item-detail">
    //                           <img src={selectMovie.posterLink} alt={`${selectMovie.title} cover`}/>
    //                           {selectMovie.title}
    //                           {selectMovie.synopsis}
    
                              
    //                     </div>
    //               </ul>
    //               <button onClick={() => UpdateSelectMovie([])+ setShow(false) }>Retour</button>
    //           </div>
    //       ) : (
        //   <div>
        //       <ul className='mml-film-list'>
        //           {movies.map(movie  => 
        //           !activeCategory || activeCategory === movie.genre ?(
        //               <div key={movie._id}>
        //                   <FilmItem
        //                     currentMovie={movie}
        //                     selectMovie={selectMovie}
        //                     UpdateSelectMovie={UpdateSelectMovie}
        //                     setShow={setShow}
        //                   />
        //               </div>
        //           ) : null
        //           )}
        //       </ul>
        //   </div>
    //   )}

export default FilmList;