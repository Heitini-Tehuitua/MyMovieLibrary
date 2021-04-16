import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import '../styles/Login.css';

function FormUser() {

    const [lastname, setLastname] = useState("")
    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")
    const [birthDate, setBirthdate] = useState(0)
    const [telephone, setTelephone] = useState(0)
    const [genre, setGenre] = useState("")
    const [password, setPassword] = useState("")

    const genres = [] //changer par un tableau renvoyer par un fetch
    function PostInsert(){
        const requestOptions = {
            method : 'POST',
            headers : { 'Content-Type' : 'application/x-www-form-urlencoded' },
            body : new URLSearchParams({
                "lastname" : lastname,
                "firstname" : firstname,
                "email" : email,
                "birthDate" : birthDate,
                "telephone" : telephone,
                "genre" : genre,
                "password" : password
            })
        }
        fetch(process.env.REACT_APP_SERVER_API + '/peoples/insert', requestOptions)
            .then(response => {
                response.send()
                console.log(response)
            })
    }
    

    return (
        <div className="mml-login">
            <p className="mml-signIn">Insert New Movie</p>
            <form onSubmit={PostInsert} className="mml-login-form">
                <label className="mml-login-label">Lastname</label>
                <input type="text" className="mml-login-champs" onChange={e => setLastname(e.target.value)}/>
                <label className="mml-login-label">Firstname</label>
                <input className="mml-login-champs" type="text" onChange={e => setFirstname(e.target.value)}/>
                <label className="mml-login-label">Email</label>
                <input className="mml-login-champs" type="email" onChange={e => setEmail(e.target.value)}/>
                <label className="mml-login-label">BirthDate</label>
                <input className="mml-login-champs" type="date" placeholder="yyyy-mm-dd" value=""min="1940-01-01" max="2020-12-31" onChange={e => setBirthdate(e.target.value)}/>
                <label className="mml-login-label">telephone</label>
                <input className="mml-login-champs" type="number" onChange={e => setTelephone(e.target.value)}/>
                <label className="mml-login-label">Genre</label>
                {/* <input className="mml-login-champs" type="url" onChange={e => setPicture(e.target.value)}/> */}
                <button className="mml-login-submit" type="submit">Add</button>
            </form>
        </div>
    )

    
}

export default FormUser