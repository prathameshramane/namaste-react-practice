const ShimmerRestaurantDetils = () => {
  return (
    <div className="px-80 py-5 animate-pulse">
      <div className="flex justify-between py-5">
        <div className="w-48">
          <h1 className="h-3 w-36 rounded-2xl bg-slate-600"></h1>
          <p className="h-2 my-1 bg-slate-400">
          </p>
          <p className="h-2 bg-slate-400">
          </p>
        </div>
        <div className="w-20 h-20 rounded-full bg-slate-600"></div>
      </div>
      {Array(10).fill("").map((mock, index) => <div key={index} className="h-8 my-2 bg-slate-600 rounded-lg" />)}
    </div>
  );
};

export default ShimmerRestaurantDetils;
