import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


import MovieCard from '../components/MovieCard';

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = () => {
            axios.get(`http://127.0.0.1:3000/movies/${id}`)
                .then(response => {
                    setMovie(response.data);
                    setLoading(false);
                })
                .catch(err => {
                    setError('Film non trovato');
                    setLoading(false);
                    console.error('Errore durante il fetch del dettaglio film:', err);
                });
        };

        fetchMovieDetail();
    }, [id]);

    if (loading) return <div>Caricamento...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {movie && (
                <>
                    <MovieCard
                        movie={movie}
                        mode="detail"
                    />
                    <Link to="/">Torna alla Home</Link>
                </>
            )}
        </div>
    );
};

export default MovieDetailPage;