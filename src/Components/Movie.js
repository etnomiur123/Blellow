import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import uuid from 'react-uuid';

const Movie = (props) => {

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovie();
        setLoading(true)
    }, [])

    const getMovie = async () => {
        const id = props.match.params.title
        const key = '4ec8be09';
        const data = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${id}`);
        const movie = await data.json();
        setLoading(false)
        setMovie(movie)
    }


    const removeParentheses = (t) => {
        return t !== undefined ? t.replace(/\(([^)]+)\)/g, "") : null;
    }


    return (
        <section>
            { loading ? <Loader /> : (<div className="movieContainer">
                <div className="movieImageContainer">
                    <img src={movie.Poster} onError={(e) => e.target.src = 'https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg'} alt={movie.Title} className="movieImage" />
                </div>
                <div className="movieDetails">
                    <h2>{movie.Title} <span>| {props.removeHyphen(movie.Year)}</span></h2>
                    <p>{movie.Plot}</p>
                    <ul className="detailsList">
                        <li key={uuid()}><span>Country</span>{movie.Country}</li>
                        <li key={uuid()}><span>Genre</span>{movie.Genre}</li>
                        <li key={uuid()}><span>Cast</span>{movie.Actors}</li>
                        <li key={uuid()}><span>Written by</span>{removeParentheses(movie.Writer)}</li>
                    </ul>
                    {movie.Ratings ? <div className="ratings">
                        <ul>
                            {movie.Ratings.map(el => {
                                return <li><span>{el.Source}: </span> {el.Value}</li>
                            })
                            }
                        </ul>
                    </div> : null}
                </div>
            </div>)}
        </section>
    )
}

export default Movie;
