import ReviewCard from './ReviewCard';

const ReviewsSection = ({
    reviews = [],
    title = "Recensioni",
    emptyMessage = "Nessuna recensione disponibile per questo film."
}) => {
    const hasReviews = reviews && reviews.length > 0;

    if (!hasReviews) {
        return (
            <div className="no-reviews">
                <p>{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className="reviews-container">
            <h2 className="reviews-title">{title}</h2>
            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;