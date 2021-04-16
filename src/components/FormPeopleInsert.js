import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FormPeople.css';
import {useState, useRef} from "react";
import { Redirect } from 'react-router';
import moment from 'moment';

function FormPeopleInsert() {
    const [isOK, setOK] = useState(false)
    let lastname = useRef(null)
    let firstname = useRef(null)
    let biography = useRef(null)
    let birthDate = useRef(null)
    let deathDate = useRef(null)
    let picture = useRef(null)

    function PostInsert(){
        const requestOptions = {
            method : 'POST',
            headers : { 'Content-Type' : 'application/x-www-form-urlencoded' },
            body : new URLSearchParams({
                'lastname' : lastname.value,
                'firstname' : firstname.value,
                'biography' : biography.value,
                'birthDate' : moment(birthDate.value, "YYYY-MM-DD").format('YYYYMMDD'),
                'deathDate' : deathDate.value,
                'picture' : picture.value,
            })
        }
        fetch(process.env.REACT_APP_SERVER_API + '/peoples/insert', requestOptions)
            .then(response => {
                response.json()
                console.log(response)
            })
        setOK(true)
    }

    function Cancel(){
        setOK(true)
    }
    
    return !isOK?(
        <div className="mml-updateForm">
            <p className="mml-header">Insert People</p>
            <form className="mml-people-form">
                <label className="mml-people-label">Lastname</label>
                <input 
                    type="text" 
                    className="mml-people-champs"
                    ref={value => lastname = value}
                />
                <label className="mml-people-label">Firstname</label>
                <input 
                    type="text" 
                    className="mml-people-champs"
                    ref={value => firstname = value}
                />
                <label className="mml-people-label">Biography</label>
                <textarea 
                    className="mml-people-champs"
                    ref={value => biography = value}
                />
                <label className="mml-people-label">BirthDate</label>
                <input 
                    className="mml-people-champs"
                    type="date"
                    ref={value => birthDate = value}
                />
                <label className="mml-people-label">Deathdate</label>
                <input 
                    className="mml-people-champs"
                    type="text"
                    ref={value => deathDate = value}
                />
                <label className="mml-people-label" >PictureLink</label>
                <input 
                    className="mml-people-champs"
                    type="url"
                    ref={value => picture = value}
                />
            </form>
            <div className="mml-up-can">
                <button className="mml-people-submit" onClick={PostInsert}>Add</button>
                <button className="mml-people-submit" onClick={Cancel}>Cancel</button>
            </div>
        </div>
        ) : <Redirect to="/actors" />
    
}

export default FormPeopleInsert