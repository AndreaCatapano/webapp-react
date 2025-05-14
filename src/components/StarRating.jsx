const StarRating = ({
    rating = 0,
    maxStars = 5,
    emptyStarClass = "far fa-star",
    fullStarClass = "fas fa-star",
}) => {
    const numericRating = Number(rating) || 0;

    const stars = Array.from({ length: maxStars }, (_, index) => {
        const isFilled = index < numericRating;
        const starClass = isFilled ? fullStarClass : emptyStarClass;
        const fillClass = isFilled ? "filled" : "empty";

        return (
            <i
                key={index}
                className={`${starClass} star-icon ${fillClass}`}
            ></i>
        );
    });

    return <div className="star-rating">{stars}</div>;
};


export default StarRating;