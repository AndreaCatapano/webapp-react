import { Link, useParams } from 'react-router-dom';
import { MOVIES } from './HomePage';

const MovieDetailPage = () => {
    const { id } = useParams();

    const movie = MOVIES.find(m => m.id === parseInt(id));

    if (!movie) {
        return <div>Film non trovato</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Anno: {movie.year}</p>
            <p>Descrizione: {movie.description}</p>
            <Link to="/">Torna alla Home</Link>
        </div>
    );
};

export default MovieDetailPage;