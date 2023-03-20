import "./notfound.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404: Not Found</h1>
      <p className="not-found-message">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
