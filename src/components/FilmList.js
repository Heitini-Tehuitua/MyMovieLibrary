import { filmList } from '../datas/filmList'
import FilmItem from './FilmItem'
import NoteScale from './NoteScale'
import '../styles/FilmList.css'
import { useState } from 'react';

function FilmList({titleFilm, UpdateTitle, activeCategory, isShow, setShow}) {

    // categories récupère les différentes categories de notre liste de film
    

    return titleFilm.length  > 0 && isShow ?(

            <div>
                <h2>Détails du Film</h2>
                <ul>
                    {titleFilm.map(({cover, title, star, describe}, index) => (
                        <div key={`${title}-${index}`} className ="mml-film-item-detail">
                            <img src={cover} alt={`${title} cover`}/>
                            {title}
                            <NoteScale scaleValue={star} />
                            {describe}

                            
                        </div>	
                    ))}
                </ul>
                <button onClick={() => UpdateTitle([])+ setShow(false) }>Retour</button>
            </div>
        ) : (
        <div>
            <ul className='mml-film-list'>
                {filmList.map(({id, describe, cover, title, star,category}) => 
                !activeCategory || activeCategory === category ?(
                    <div key={id}>
                        <FilmItem
                            id={id}
                            describe={describe}
                            cover={cover}
                            title={title}
                            star={star}
                            titleFilm = {titleFilm}
                            UpdateTitle = {UpdateTitle}
                            setShow = {setShow}
                        />
                    </div>
                ) : null
                )}
            </ul>
        </div>
    )}

export default FilmList