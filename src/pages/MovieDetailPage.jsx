import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { MOVIES } from './HomePage';

const MovieDetailPage = () => {
    const { id } = useParams();

    const movie = MOVIES.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <div>Film non trovato</div>;
    }

    return (
        <div>
            <MovieCard
                movie={movie}
                mode="detail"
            />
            <Link to="/">Torna alla Home</Link>
        </div>
    );
};

export default MovieDetailPage;