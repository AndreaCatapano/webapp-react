import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import { LoadingProvider } from './context/LoadingContext';
import LoadingSpinner from './components/LoadingSpinner';
import { useLoading } from './context/LoadingContext';

const AppContent = () => {
  const { loading, error } = useLoading();

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div className="global-error">{error}</div>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </Router>
  );
}

export default App;