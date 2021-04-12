import 'bootstrap/dist/css/bootstrap.min.css';
import {userList} from '../datas/userList';
import {useState} from "react";
import '../styles/Login.css';

function Login({setVerifUser}) {

    const [activeLogin, setActiveLogin] = useState("")
    const [activePassword, setActivePassword] = useState("")

    function VerifUser(){
        userList.map(user =>
            {if(user.login === activeLogin && user.password === activePassword){  
              return setVerifUser(true);
            }else{
              return null;
            }
        });
    }

    return (
        <div className="mml-login">
            <p className="mml-signIn">Sign In</p>
            <form onSubmit={VerifUser} className="mml-login-form">
                <label className="mml-login-label">Username</label>
                <input type="text" className="mml-login-champs" onChange={e => setActiveLogin(e.target.value)}/>
                <label className="mml-login-label">Password</label>
                <input className="mml-login-champs" type="password" onChange={e => setActivePassword(e.target.value)}/>
                <button className="mml-login-submit" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login