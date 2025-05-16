import { createContext, useState, useContext } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const startLoading = () => {
        setLoading(true);
    };

    const stopLoading = () => {
        setLoading(false);
    };

    const setLoadingError = (errorMessage) => {
        setError(errorMessage);
    };

    const clearError = () => {
        setError(null);
    };

    const value = {
        loading,
        error,
        startLoading,
        stopLoading,
        setLoadingError,
        clearError
    };

    return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};

export default LoadingContext;