function Rating({ value = 0, reviewCount = 0, showCount = true }) {
  const safeValue = Number(value) || 0;

  return (
    <div className="rating-block" aria-label={`Rated ${safeValue} out of 5`}>
      <span className="stars" aria-hidden="true">{'★'.repeat(Math.round(safeValue))}</span>
      <span className="rating-value">{safeValue.toFixed(1)}</span>
      {showCount && <span className="review-count">({reviewCount} reviews)</span>}
    </div>
  );
}

export default Rating;
