import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FormMovie.css';
import {Redirect, useLocation} from "react-router-dom";
import { useState } from 'react';

function RequestDeletePeople() {

    const [isOk, setOK] = useState(false)
    var query = new URLSearchParams(useLocation().search);
    let peopleID = query.get("id");

    function PostDelete(){
        const requestOptions = {
            method : 'POST',
            headers : { 'Content-Type' : 'application/x-www-form-urlencoded' },
            body : new URLSearchParams({
                'id' : peopleID
            })
        }
        fetch(process.env.REACT_APP_SERVER_API + '/peoples/delete', requestOptions)
            .then(response => {
                response.json()
                console.log(response)
            })
        
        setOK(true)
    }
    
    function Cancel(){
        setOK(true)
    }
    return !isOk?(
        <div>
            
                <p>Are u Sure u wanna Delete?</p>
                <button className="mml-login-submit" onClick={Cancel}>Cancel</button>
                <button className="mml-login-submit" onClick={PostDelete}>Delete</button>
        </div>
    ) : <Redirect to="/actors" />
}

export default RequestDeletePeople