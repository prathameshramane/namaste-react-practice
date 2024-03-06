const Shimmer = () => {
  return (
    <>
      {Array(25)
        .fill("")
        .map((value, index) => (
          <div className="shimmer-ui" key={"shimmer-" + index}></div>
        ))}
    </>
  );
};

export default Shimmer;
