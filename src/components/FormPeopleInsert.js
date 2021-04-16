import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FormMovie.css';
import {useState, useRef} from "react";
import { Redirect } from 'react-router';

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
                'birthDate' : birthDate.value,
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
    
    return !isOK?(
        <div>
            <p className="mml-signIn">Insert People</p>
            <form className="mml-login-form">
                <label className="mml-login-label">Lastname</label>
                <input 
                    type="text" 
                    className="mml-login-champs"
                    ref={value => lastname = value}
                />
                <label className="mml-login-label">Firstname</label>
                <input 
                    type="text" 
                    className="mml-login-champs"
                    ref={value => firstname = value}
                />
                <label className="mml-login-label">Biography</label>
                <textarea 
                    className="mml-login-champs"
                    ref={value => biography = value}
                />
                <label className="mml-login-label">BirthDate</label>
                <input 
                    className="mml-login-champs"
                    type="date"
                    ref={value => birthDate = value}
                />
                <label className="mml-login-label">Deathdate</label>
                <input 
                    className="mml-login-champs"
                    type="text"
                    ref={value => deathDate = value}
                />
                <label className="mml-login-label" >PictureLink</label>
                <input 
                    className="mml-login-champs"
                    type="url"
                    ref={value => picture = value}
                />
            </form>
                <button className="mml-login-submit" onClick={PostInsert}>ADD</button>
        </div>
        ) : <Redirect to="/actors" />
    
}

export default FormPeopleInsert