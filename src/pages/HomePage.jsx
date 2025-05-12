import MovieCard from '../components/MovieCard';

const MOVIES = [
    {
        id: 1,
        title: 'Inception',
        year: 2010,
        director: 'Christopher Nolan',
        genre: 'Sci-Fi, Action',
        image: 'https://example.com/inception.jpg',
        abstract: 'Un thriller sci-fi che esplora i confini dei sogni e della realtà.'
    }
];

const HomePage = () => {
    return (
        <div>
            <h1>Film List</h1>
            {MOVIES.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    mode="list"
                />
            ))}
        </div>
    );
};

export { HomePage, MOVIES };