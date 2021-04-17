import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FormPeople.css';
import {Redirect, useLocation} from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import Chargement from "./Chargement";
import moment from 'moment';

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

    function Cancel(){
        setOK(true)
    }
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
                'birthDate' : moment(birthdate.value, "YYYY-MM-DD").format('YYYYMMDD'),
                'deathDate' : deathdate.value,
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
            <div className="mml-updateForm">
                <p className="mml-header">Update People</p>
                <form className="mml-people-form">
                    <label className="mml-people-label">Lastname</label>
                    <input 
                        type="text" 
                        defaultValue={currentPeople.lastname}
                        className="mml-people-champs"
                        ref={value => lastname = value}
                    />
                    <label className="mml-people-label">Firstname</label>
                    <input 
                        type="text" 
                        defaultValue={currentPeople.firstname}
                        className="mml-people-champs"
                        ref={value => firstname = value}
                    />
                    <label className="mml-people-label">Biography</label>
                    <textarea 
                        className="mml-people-champs"
                        defaultValue={currentPeople.biography}
                        ref={value => biography = value}
                    />
                    <label className="mml-people-label">BirthDate</label>
                    <input 
                        className="mml-people-champs"
                        defaultValue={moment(currentPeople.birthDate, "YYYYMMDD").format('YYYY-MM-DD')}
                        type="date"
                        ref={value => birthdate = value}
                    />
                    <label className="mml-people-label">Deathdate</label>
                    <input 
                        className="mml-people-champs"
                        defaultValue={currentPeople.deathdate}
                        type="text"
                        ref={value => deathdate = value}
                    />
                    <label className="mml-people-label" >PosterLink</label>
                    <input 
                        className="mml-people-champs"
                        defaultValue={currentPeople.picture}
                        type="url"
                        ref={value => picture = value}
                    />
                </form>
                <div className="mml-up-can">
                    <button className="mml-people-submit" onClick={PostUpdate}>Update</button>
                    <button className="mml-people-submit" onClick={Cancel}>Cancel</button>
                </div>
            </div>
        ) : <Redirect to={`actorDetails?id=${currentPeople._id}`}/>
    }
}

export default FormPeople