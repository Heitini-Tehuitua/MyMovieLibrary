import {useState, useEffect } from "react";
import Banner from "./Banner";
import Chargement from "./Chargement";
import '../styles/GetData.css';

function GetData(){
    const [movies, setMovies] = useState([])
    const [peoples, setPeoples] = useState([])
    const [error, setError] = useState(null);
    const [error2, setError2] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 
    const [isLoaded2, setIsLoaded2] = useState(false); 

    // Fetching data
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

    fetch(process.env.REACT_APP_SERVER_API + `/peoples`)
      .then(res => res.json())
      .then(
        (result) => {
          setPeoples(result);
          setIsLoaded2(true);
        },
        (error) => {
          setError2(error);
          setIsLoaded2(true);
        }
      )
        console.log("Fetching movies OK !");
    }, [])
    
    if (error || error2) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded || !isLoaded2) {
        return(
            <div className="mml-loading-container">
                <Chargement />
            </div>
        )
    }else{
        const data = [movies,peoples];

        console.log("tab Data", data)
        return(
          <Banner  
            data = {data}
          />
        )
    }
}

export default GetData;
    