import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FormMovie.css';
import {Link, Redirect, useLocation} from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import Chargement from "./Chargement";
import moment from "moment";

function FormPeople() {

    let lastname = useRef(null)
    let firstname = useRef(null)
    let biography = useRef(null)
    let birthdate = useRef(null)
    let deathdate = useRef(null)
    let picture = useRef(null)
    const [isOK, setOK] = useState(false)

    var query = new URLSearchParams(useLocation().search);
    const [currentPeople, setPeople] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 

    // Fetching data
    useEffect(() => {
        let peopleID = query.get("id");

        fetch(process.env.REACT_APP_SERVER_API + "/peopleDetails?id=" + peopleID)
        .then(res => res.json())
        .then(
            (result) => {
                if(result.error){
                setError(result.error);
                console.log(result.error)
                } else {

                console.log("Result : ", result);
                setPeople(result)
                setIsLoaded(true);
                console.log("PeopleD Result :" + result[0])
                }
            },
            (error) => {
                setError(error);
                setIsLoaded(true);
            }
        )
    }, [])

    function PostUpdate(){
        const requestOptions = {
            method : 'POST',
            headers : { 'Content-Type' : 'application/x-www-form-urlencoded' },
            body : new URLSearchParams({
                'id' : currentPeople._id,
                'lastname' : lastname.value,
                'firstname' : firstname.value,
                'biography' : biography.value,
                'birthdate' : birthdate.value,
                'deathdate' : deathdate.genre,
                'picture' : picture.value,
            })
        }
        fetch(process.env.REACT_APP_SERVER_API + '/peoples/update', requestOptions)
            .then(response => {
                response.json()
                console.log(response)
            })
        
        setOK(true)
    }
    
    if (error) {
        return <div>Erreur : {error}</div>;
      } else if (!isLoaded) {
          return(
              <div className="mml-loading-container">
                  <Chargement />
              </div>
          )
      } else {
        return !isOK?(
            <div>
                <p className="mml-signIn">Update People</p>
                <form className="mml-login-form">
                    <label className="mml-login-label">Lastname</label>
                    <input 
                        type="text" 
                        defaultValue={currentPeople.lastname}
                        className="mml-login-champs"
                        ref={value => lastname = value}
                    />
                    <label className="mml-login-label">Firstname</label>
                    <input 
                        type="text" 
                        defaultValue={currentPeople.firstname}
                        className="mml-login-champs"
                        ref={value => firstname = value}
                    />
                    <label className="mml-login-label">Biography</label>
                    <textarea 
                        className="mml-login-champs"
                        defaultValue={currentPeople.biography}
                        ref={value => biography = value}
                    />
                    <label className="mml-login-label">BirthDate</label>
                    <input 
                        className="mml-login-champs"
                        defaultValue={currentPeople.birthDate}
                        type="date"
                        ref={value => birthdate = value}
                    />
                    <label className="mml-login-label">Deathdate</label>
                    <input 
                        className="mml-login-champs"
                        defaultValue={currentPeople.deathdate}
                        type="text"
                        ref={value => deathdate = value}
                    />
                    <label className="mml-login-label" >PosterLink</label>
                    <input 
                        className="mml-login-champs"
                        defaultValue={currentPeople.picture}
                        type="url"
                        ref={value => picture = value}
                    />
                </form>
                    <button className="mml-login-submit" onClick={PostUpdate}>Update</button>
            </div>
        ) : <Redirect to={`actorDetails?id=${currentPeople._id}`}/>
    }
}

export default FormPeople