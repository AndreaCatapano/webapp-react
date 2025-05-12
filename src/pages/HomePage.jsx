import { Link } from 'react-router-dom';

const MOVIES = [
    { id: 1, title: 'Inception', year: 2010, description: 'A mind-bending sci-fi thriller' },
    { id: 2, title: 'The Shawshank Redemption', year: 1994, description: 'A powerful story of hope and friendship' },
    { id: 3, title: 'The Godfather', year: 1972, description: 'A classic crime drama' }
];

const HomePage = () => {
    return (
        <div>
            <h1>Film List</h1>
            {MOVIES.map(movie => (
                <div key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                        <h2>{movie.title}</h2>
                        <p>Year: {movie.year}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export { HomePage, MOVIES };