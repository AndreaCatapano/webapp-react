import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useLoading } from '../context/LoadingContext';

import MovieCard from '../components/MovieCard';
import ReviewsSection from '../components/ReviewSection.jsx';
import ReviewForm from '../components/ReviewForm.jsx';

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const { startLoading, stopLoading, setLoadingError } = useLoading();

    const fetchMovieDetail = () => {
        startLoading();
        axios.get(`http://127.0.0.1:3000/movies/${id}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(err => {
                console.error('Errore durante il fetch del dettaglio film:', err);
                setLoadingError('Errore durante il caricamento dei dettagli del film');
            })
            .finally(_ => {
                stopLoading();
            });
    };

    useEffect(() => {
        fetchMovieDetail();
    }, [id]);

    return (
        <>
            <div className="page-container">
                {movie && (
                    <div className="detail-container">
                        <MovieCard
                            movie={movie}
                            mode="detail"
                        />
                        <Link to="/" className="back-link">Torna alla Home</Link>
                    </div>
                )}
            </div>

            {movie && <ReviewsSection reviews={movie.reviews} />}

            {movie && <ReviewForm movieId={id} onReviewAdded={fetchMovieDetail} />}
        </>
    );
};

export default MovieDetailPage;