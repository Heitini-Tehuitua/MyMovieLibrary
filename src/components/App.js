import './../styles/App.css';
import Banner from './Banner';
import DetailsFilm from './DetailsFilm';
import ShoppingList from './ShoppingList';
import '../styles/Layout.css'
import { useState } from 'react';

function App() {

  const [titleFilm, UpdateTitle] = useState([])
  const [activeCategory, setActiveCategory] = useState("")
  return (
    <div>
      <Banner activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>

      <div className='mml-layout-inner'>
				<DetailsFilm titleFilm={titleFilm} UpdateTitle={UpdateTitle} />
				<ShoppingList 
          titleFilm={titleFilm} 
          UpdateTitle={UpdateTitle} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
        />
			</div>
    </div>
  );
}

export default App;
