import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container section-spacing">
      <div className="state-card empty-state">
        <h2>Page not found</h2>
        <p>The page you requested does not exist.</p>
        <Link to="/" className="inline-link">Return home</Link>
      </div>
    </div>
  );
}

export default NotFound;
