import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import '../styles/Login.css';
import Chargement from './Chargement'
import {Link, Redirect} from "react-router-dom";
import logo from '../assets/myflix.png';

function Login() {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeLogin, setActiveLogin] = useState("")
    const [activePassword, setActivePassword] = useState("")
    const [verifUser, setVerifUser] = useState(false)
    console.log("User : ", verifUser)

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + "/users")
        .then(res => res.json())
        .then(
            (result) => {
                console.log("Result : ", result);
                setUsers(result)
                setIsLoaded(true);
            },
            (error) => {
                setError(error);
                setIsLoaded(true);
            }
        )
        console.log("Fetching users OK !");
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
        function VerifUser(){
            users.map(user =>
                {if(user.email === activeLogin && user.password === activePassword){  
                return setVerifUser(true);
                }else{
                return null;
                }
            });
        }

        function PostInsert(){
            const requestOptions = {
                method : 'POST',
                headers : { 'Content-Type' : 'application/x-www-form-urlencoded' },
                body : new URLSearchParams({
                    'name' : activeLogin,
                    'address' : activePassword
                })
            }
            fetch(process.env.REACT_APP_SERVER_API + '/theater/insert', requestOptions)
                .then(response => {
                    response.send()
                    console.log(response)
                })
        }

        return !verifUser?(
            <div className="mml-app-login">
                    <img src = {logo} alt='My Movie Library' className = "mml-app-logo" />
                <div className="mml-login">
                    <p className="mml-signIn">Sign In</p>
                    <form onSubmit={VerifUser} className="mml-login-form">
                        <label className="mml-login-label">Username</label>
                        <input type="text" className="mml-login-champs" onChange={e => setActiveLogin(e.target.value)}/>
                        <label className="mml-login-label">Password</label>
                        <input className="mml-login-champs" type="password" onChange={e => setActivePassword(e.target.value)}/>
                        <button className="mml-login-submit" type="submit">Login</button>
                    </form>
                    <div className="mml-register">
                        <p>Need an account?</p>
                        <Link to="/formUser">
                            <p>register</p>
                        </Link>
                    </div>
                </div>
            </div>
        ) : (
            <Redirect to="/home" />
        )
    }

    
}

export default Login