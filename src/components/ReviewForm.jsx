import { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ movieId, onReviewAdded }) => {
  const [formData, setFormData] = useState({
    reviewerName: '',
    reviewText: '',
    rating: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      name: formData.reviewerName,
      text: formData.reviewText,
      vote: formData.rating,
    };

    axios.post(`http://127.0.0.1:3000/movies/${movieId}`, dataToSend)
      .then(() => {
        setFormData({
          reviewerName: '',
          reviewText: '',
          rating: '',
        });

        if (onReviewAdded) {
          onReviewAdded();
        }
      })
      .catch((error) => {
        console.error('Errore durante l\'invio della recensione:', error);
      });
  };

  return (
    <div className="review-form-container">
      <h3>Aggiungi una recensione</h3>
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reviewerName">Nome:</label>
          <input
            type="text"
            id="reviewerName"
            name="reviewerName"
            value={formData.reviewerName}
            onChange={handleChange}
            placeholder="Inserisci il tuo nome"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reviewText">Recensione:</label>
          <textarea
            id="reviewText"
            name="reviewText"
            rows="4"
            value={formData.reviewText}
            onChange={handleChange}
            placeholder="Scrivi la tua recensione"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="rating">Voto:</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Seleziona un voto</option>
            <option value="1">1 - Pessimo</option>
            <option value="2">2 - Scarso</option>
            <option value="3">3 - Discreto</option>
            <option value="4">4 - Buono</option>
            <option value="5">5 - Ottimo</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Invia recensione</button>
      </form>
    </div>
  );
};

export default ReviewForm;
