import React, { useState } from 'react';

const Filter = (props) => {

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [type, setType] = useState("")

    const getMovies = async () => {
        const key = '4ec8be09'
        const results = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${title}&y=${year}&type=${type}`);
        const data = await results.json();
        props.passMovies(data.Search)
    }


    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if(name === "title") {
            setTitle(value)
        }
        if(name === "year") {
            setYear(value)
        }
        if(name === "type") {
            setType(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovies();
        props.isLoading(true)
    }

    return (
        <form  className="filterForm" onSubmit={handleSubmit}>
            <input type="text" name="title" className="titleFilter" placeholder="Movie Title" onChange={handleInput}/>
            <input type="number" name="year" min="1920" max="2020" className="yearFilter" placeholder="Year" onChange={handleInput}/>
            <select type="text" name="type" className="typeFilter" placeholder="Genre" onChange={handleInput}>
                <option value="" disabled defaultValue>Choose Type</option>
                <option value="">All</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
                </select>
            <button className="filterBtn"><i className="fas fa-search"></i></button>
        </form>
    )
}

export default Filter;