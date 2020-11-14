import React, { useState, useEffect } from 'react';
import Card from './Card';
import Filter from './Filter';
import Loader from './Loader';
import uuid from 'react-uuid';


const Repository = (props) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false)
    }, [movies])

    const passMovies = (data) => {
        setMovies(data)
    }

    const isLoading = (b) => {
        setLoading(true)
    }


    return (
        <section>
            <div className="repositoryContainer">
                <h1>Repository</h1>
                <Filter passMovies={passMovies} isLoading={isLoading} />
                <div className="repository">
                    {loading ? <Loader /> : movies ? movies.map(el => {
                        return <Card key={uuid()} image={el.Poster} title={el.Title} id={el.imdbID} year={el.Year} removeHyphen={props.removeHyphen}/>
                    }) : <p className="noResults">No results</p>
                    }
                </div>
            </div>
        </section>
    )
}

export default Repository;