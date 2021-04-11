import './../styles/App.css';
import '../styles/Layout.css';
import GetData from './GetData';

function App() {

  return (
    <div className="App">
      <GetData />
    </div>
  )
}

// function App() {

//   const [titleFilm, UpdateTitle] = useState([])
//   const [activeCategory, setActiveCategory] = useState("")
//   const [activeLogin, setActiveLogin] = useState("")
//   const [activePassword, setActivePassword] = useState("")
//   const [verifUser, setVerifUser] = useState(false)
//   const [ isShow, setShow] = useState(false)

//   return verifUser ?(
//     <div>
//       <Banner 
//         activeCategory={activeCategory} 
//         setActiveCategory={setActiveCategory}
//         setShow = {setShow}
//       />

//       <div className='mml-layout-inner'>
//         <FilmList 
//           titleFilm={titleFilm} 
//           UpdateTitle={UpdateTitle} 
//           activeCategory={activeCategory} 
//           setActiveCategory={setActiveCategory}
//           isShow={isShow}
//           setShow = {setShow}
//         />
//       </div>
//     </div>
//   ) : (
//     <Login
//       activeLogin={activeLogin}
//       activePassword={activePassword}
//       setActiveLogin={setActiveLogin}
//       setActivePassword={setActivePassword}
//       setVerifUser={setVerifUser}
//     />
//   )
// };

export default App;
