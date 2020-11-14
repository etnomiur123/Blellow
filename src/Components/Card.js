
import { Link } from 'react-router-dom';

const Card = (props) => {

    return (
        <div className="card" key={props.id}>
            <Link to={`/repository/${props.id}`}>
                <img src={props.image} onError={(e) => e.target.src = 'https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg'} alt={props.title} />
                <div className="cardTitle">
                    <div className="cardTitleInner">
                        <div>
                            <p>{props.title}</p>
                            <div className="cardLine"></div>
                            <p>{props.removeHyphen(props.year)}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;