import './../styles/App.css';
import Banner from './Banner';
import FilmList from './FilmList';
import Login from './Login';
import '../styles/Layout.css'
import { useState } from 'react';


function App() {

  
  const [activeCategory, setActiveCategory] = useState("")
  const [activeLogin, setActiveLogin] = useState("")
  const [activePassword, setActivePassword] = useState("")
  const [verifUser, setVerifUser] = useState(false)
  const [ isShow, setShow] = useState(false)

  return (
    <div>
      <Banner 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
        setShow = {setShow}
      />

      <div className='mml-layout-inner'>
        <FilmList 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
          isShow={isShow}
          setShow = {setShow}
        />
      </div>
    </div>
  )
  // ) : (
  //   <div>

  //     <Login
  //       activeLogin={activeLogin}
  //       activePassword={activePassword}
  //       setActiveLogin={setActiveLogin}
  //       setActivePassword={setActivePassword}
  //       setVerifUser={setVerifUser}
  //     />
  //   </div>
  // )
};

export default App;
