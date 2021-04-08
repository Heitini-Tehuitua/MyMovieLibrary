import { userList } from '../datas/userList'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({activeLogin, activePassword, setActiveLogin, setActivePassword, setVerifUser }) {

    function VerifUser(){
        {userList.map(({login, password}) => 
        activeLogin === login || activePassword === password ?(
            setVerifUser(true)
            
        ) : 
        setVerifUser(false)
        )}
        console.log("user =",activeLogin)
    }

    // categories récupère les différentes categories de notre liste de film
    return (
        <div className="container centered">
            <h1>Sign In</h1>
            <form onSubmit={VerifUser} className="form-group">
                <label className="label-control">Username</label>
                <input type="text" className="col-sm-4 form-control" onChange={e => setActiveLogin(e.target.value)}/>
                <label className="label-control">Password</label>
                <input className="col-sm-4 form-control" type="password" onChange={e => setActivePassword(e.target.value)}/>
                <button className=" col-sm-2 form-control" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login