import FilmItem from './FilmItem'
import DisplayCover from './DisplayCover'
import '../styles/FilmList.css'

function FilmList({data}) {
    const movies = data[0];
    return (
        <div className="mml-moviesList-container">
            <div id="movies">
                <DisplayCover movies = {movies}/>
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
    )

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