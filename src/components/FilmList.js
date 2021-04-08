import FilmItem from './FilmItem'
import '../styles/FilmList.css'
import { React, useState, useEffect } from "react";
import { BrowserRouter as Link} from "react-router-dom";

function FilmList({activeCategory, isShow, setShow}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    const [selectMovie, UpdateSelectMovie] = useState([]);

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
        return <div>Chargement...</div>;
    } else {

        return (
            <div>
            <h3>Liste des Films</h3>
            { !isLoaded ? ( <div>Chargement...</div> ) : ( 
            
                <div id="movies">
                {
                    movies.map(movie => (
                        <ul id={movie._id}>

                        <FilmItem
                            currentMovie={movie}
                            selectMovie={selectMovie}
                            UpdateSelectMovie={UpdateSelectMovie}
                            setShow={setShow}
                            movie={movie}
                        />
            
                        </ul>
                    ))
                }
                </div>
            )}
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

export default FilmList