const Skeloton = () => {
  return (
    <div className="skeleton-container">
      {Array(50)
        .fill(null)
        .map((_, index) => (
          <div className="skeleton-product" key={index}>
            <div>
              <div>
                <div className="skeleton-image"></div>
                <h3 className="skeleton-text"></h3>
                <h4 className="skeleton-text"></h4>
              </div>
              <button className="skeleton-button"></button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Skeloton;
