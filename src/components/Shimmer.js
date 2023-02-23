const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(15)
        .fill('')
        .map((e, index) => (
          <div key={index.toString()}>
            <div className="shimmer-card" />
            <div className="line"></div>
            <div className="line"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
