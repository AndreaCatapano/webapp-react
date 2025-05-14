const ReviewForm = () => {
  return (
    <div className="review-form-container">
      <h3>Aggiungi una recensione</h3>
      <form className="review-form">
        <div className="form-group">
          <label htmlFor="reviewerName">Nome:</label>
          <input
            type="text"
            id="reviewerName"
            name="reviewerName"
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
            placeholder="Scrivi la tua recensione"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="rating">Voto (1-5):</label>
          <select id="rating" name="rating" required>
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