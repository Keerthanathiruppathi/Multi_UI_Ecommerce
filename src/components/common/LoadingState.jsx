function LoadingState({ message = 'Loading...' }) {
  return (
    <div className="state-card">
      <div className="spinner" aria-label="Loading" />
      <p>{message}</p>
    </div>
  );
}

export default LoadingState;
