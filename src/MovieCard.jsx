import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
           <div className="icons">
                <FontAwesomeIcon icon="heart" className='heartred'/>
                <FontAwesomeIcon icon="share-nodes" className='shareblue' />
                <FontAwesomeIcon icon="message" className='cmntyellow'/>
            </div>
        </div>
    );
};

export default MovieCard;