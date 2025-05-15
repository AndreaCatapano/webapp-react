import axios from 'axios';
import React, { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');



    const fetchMovies = () => {

        axios.get('http://127.0.0.1:3000/movies')
            .then(response => {
                setMovies(response.data);
                setFilteredMovies(response.data);
            })
            .catch(err => {
                console.error('Errore durante il fetch dei film:', err);
            });
    };

    const handleSearchChange = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setError(null);

        if (term === '') {
            fetchMovies();
        } else {
            axios.get(`http://127.0.0.1:3000/movies?search=${encodeURIComponent(term)}`)
                .then(response => {
                    setFilteredMovies(response.data);
                })
                .catch(err => {
                    console.error('Errore nel fetch dei film filtrati:', err);
                });
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="page-container">
            <h1>Film List</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Cerca film..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            {filteredMovies.length === 0 ? (
                <div className="no-results">Nessun film trovato</div>
            ) : (
                <div className="movies-container">
                    {filteredMovies.map(movie => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            mode="list"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;