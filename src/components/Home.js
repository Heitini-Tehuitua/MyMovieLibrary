import '../styles/Home.css'
import HomeItemList from './HomeItemList'
import DisplayCover from './DisplayCover'
import {useState, useEffect } from "react";
import Chargement from "./Chargement";

function Home() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + "/movies")
        .then(res => res.json())
        .then(
            (result) => {
                console.log("Result : ", result);
                setMovies(result)
                setIsLoaded(true);
            },
            (error) => {
                setError(error);
                setIsLoaded(true);
            }
        )
        console.log("Fetching movies OK !");
    }, []);
    
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return(
            <div className="mml-loading-container">
                <Chargement />
            </div>
        )
    } else {
        return (
            <div className="mml-home-container">
                <DisplayCover movies={movies}/>
                <h2>Home</h2>
                <HomeItemList movies={movies}/>
            </div>
        )
    }
    
}

export default Home;