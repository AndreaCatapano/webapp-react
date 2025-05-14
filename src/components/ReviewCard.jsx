import StarRating from './StarRating';

const ReviewCard = ({ review }) => {
    return (
        <div className="review-item">
            <div className="review-header">
                <h3 className="review-author">{review.name || 'Utente anonimo'}</h3>
                <div className="review-rating">
                    <StarRating rating={review.vote} />
                </div>
            </div>
            <p className="review-content">{review.text}</p>
            <p className="review-date">
                {review.created_at && new Date(review.created_at).toLocaleDateString('it-IT')}
            </p>
        </div>
    );
};

export default ReviewCard;