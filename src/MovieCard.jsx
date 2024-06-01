
let MovieCard = ( props ) =>{
    return(
        <div className="movieCard">
            <div className="fulldisc">
            <div className="mainDetails">
                <img src={props.logo} alt="" className="movielogo"/>
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.year}, {props.director}</p>

                    <div className="gentime">
                        <div> <p>{props.Runtime}</p></div>
                        <p>{props.genre}</p>
                    </div>
                </div>
                
            </div>
            <p>{props.plot}</p>
            </div>
            <div>
                <img src={props.banner} alt="" className="banner"/>
            </div>
           
        </div>
    );
};

export default MovieCard;