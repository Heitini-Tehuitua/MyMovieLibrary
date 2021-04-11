import '../styles/Home.css'
import HomeItemList from './HomeItemList'
import DisplayCover from './DisplayCover'

function Home({data}) {
    const movies = data[0];
    return (
        <div className="mml-home-container">
            <DisplayCover movies={movies}/>
            <h2>Home</h2>
            <HomeItemList movies={movies}/>
        </div>
    )
    
}

export default Home;