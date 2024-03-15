const Shimmer = () => {
  return (
    <>
      {Array(25)
        .fill("")
        .map((value, index) => (
          <div className="w-80 h-80 border border-gray-300 rounded shadow-md p-3 animate-pulse" key={index}>
            <div className="h-48 bg-slate-700 rounded"></div>
            <div className="h-2 my-3 bg-slate-700"></div>
            <div className="h-2 w-48 my-3 bg-slate-700"></div>
            <div className="h-2 w-24 my-3 bg-slate-700"></div>
          </div>
        ))}
    </>
  );
};

export default Shimmer;
