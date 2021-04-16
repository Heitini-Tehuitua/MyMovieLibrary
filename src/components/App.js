import './../styles/App.css';
import '../styles/Layout.css';

import Banner from './Banner';
import FilmList from './FilmList';
import ActorsList from './ActorsList';
import ActorDetails from './ActorDetails';
import MovieDetails from './MovieDetails';
import Login from './Login';
import FormUser from './FormUser';
import FormMovie from './FormMovie';
import FormPeople from './FormPeople';
import Home from './Home'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import FormPeopleInsert from './FormPeopleInsert';
import RequestDeletePeople from './RequestDeletePeople';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/movies">
              <Banner />
              <FilmList/>
            </Route>

            <Route path="/movieDetails">
              <Banner />
              <MovieDetails />
            </Route>

            <Route path="/formMovie">
              <FormMovie />
            </Route>
            <Route path="/actors">
              <Banner />
              <ActorsList/>
            </Route>
            <Route path="/actorDetails">
              <Banner />
              <ActorDetails/>
            </Route>
            <Route path="/home">
              <Banner />
              <Home />
            </Route>
            <Route path="/formUser">
              <FormUser />
            </Route>
            <Route path="/formPeople">
              <FormPeople />
            </Route>
            <Route path="/formPeopleInsert">
              <FormPeopleInsert />
            </Route>
            <Route path="/deletePeople">
              <RequestDeletePeople />
            </Route>
            <Route path="/">        
                <Login/>
            </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App;
