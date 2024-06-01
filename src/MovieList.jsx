import MovieCard from "./MovieCard.jsx"
import Film from "./Film.json"

function MovieList (){
    return (
        <div className="movieData">
        {Film.map((ele,index) => {
            // console.log(ele.Year);
            return (
            <MovieCard key={index} title={ele.Title} genre={ele.Genre} logo={ele.Images[1]} Runtime={ele.Runtime}
            director={ele.Director} year={ele.Year} plot={ele.Plot} banner={ele.Images[0]}
            > 
            </MovieCard>)
            // <h1>{ele.Title}</h1>
        })}
        </div>
    )
}
export default MovieList;