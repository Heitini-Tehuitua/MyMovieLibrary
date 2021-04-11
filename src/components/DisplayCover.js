import '../styles/DisplayCover.css'

function DisplayCover({movies}) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    const randomShow = getRandomInt(5);
    return (
        <div className="mml-display-container" id="showContainer">
            {movies.map(movie => (
                movie._id === `${randomShow}` ?(
                    <img key="display_cover" className="mml-display-cover" src={movie.posterLink} alt={`${movie.title} cover`} />
            ) : null))}
        </div>
    )
}
export default DisplayCover;