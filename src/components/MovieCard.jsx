import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie, mode = 'list' }) => {
    if (!movie) {
        return <div>Nessun film trovato</div>;
    }

    return (
        <div className="movie-card">
            <img
                src={movie.imageUrl}
                alt={movie.title}
                style={{ maxWidth: '300px', maxHeight: '450px' }}
            />
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p><strong>Direttore:</strong> {movie.director}</p>
                <p><strong>Genere:</strong> {movie.genre}</p>
                <p><strong>Anno:</strong> {movie.release_year}</p>

                {mode === 'list' ? (
                    <Link to={`/movie/${movie.id}`}>
                        <button>Vedi Dettagli</button>
                    </Link>
                ) : (
                    <p>{movie.abstract}</p>
                )}
            </div>
        </div>
    );
};

export default MovieCard;