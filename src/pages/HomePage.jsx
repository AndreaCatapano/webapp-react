import axios from 'axios';
import React, { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard';


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = () => {
            axios.get('http://127.0.0.1:3000/movies')
                .then(response => {
                    setMovies(response.data);
                    setLoading(false);
                })
                .catch(err => {
                    setError('Errore nel caricamento dei film');
                    setLoading(false);
                    console.error('Errore durante il fetch dei film:', err);
                });
        };

        fetchMovies();
    }, []);

    if (loading) return <div>Caricamento...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Film List</h1>
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    mode="list"
                />
            ))}
        </div>
    );
};
export { HomePage };