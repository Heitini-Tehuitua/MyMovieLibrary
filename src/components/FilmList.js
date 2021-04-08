import FilmItem from './FilmItem'
import NoteScale from './NoteScale'
import '../styles/FilmList.css'
import { React, useState, useEffect } from "react";

function FilmList({activeCategory, isShow, setShow}) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setItems] = useState([]);
    const [selectMovie, UpdateSelectMovie] = useState([]);

  // Fetching data
    console.log(`"Fetching data from ${process.env.REACT_APP_SERVER_API}...`);
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + "/movies")
        .then(res => res.json())
        .then(
            (result) => {
            console.log("Result : ", result);
            setIsLoaded(true);
            setItems(result);
            },
            // Remarque : il faut gérer les erreurs ici plutôt que dans
            // un bloc catch() afin que nous n’avalions pas les exceptions
            // dues à de véritables bugs dans les composants.
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

      return isShow ?(
    
              <div>
                  <h2>Détails du Film</h2>
                  <ul>
                        <div key={selectMovie._id} className ="mml-film-item-detail">
                              <img src={selectMovie.posterLink} alt={`${selectMovie.title} cover`}/>
                              {selectMovie.title}
                              {selectMovie.synopsis}
    
                              
                        </div>
                  </ul>
                  <button onClick={() => UpdateSelectMovie([])+ setShow(false) }>Retour</button>
              </div>
          ) : (
          <div>
              <ul className='mml-film-list'>
                  {movies.map(movie  => 
                  !activeCategory || activeCategory === movie.genre ?(
                      <div key={movie._id}>
                          <FilmItem
                            currentMovie={movie}
                            selectMovie={selectMovie}
                            UpdateSelectMovie={UpdateSelectMovie}
                            setShow={setShow}
                          />
                      </div>
                  ) : null
                  )}
              </ul>
          </div>
      )}
  }


export default FilmList