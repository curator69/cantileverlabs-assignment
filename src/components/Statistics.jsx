const Statistics = () => {
  return (
    <div className="flex flex-col gap-4 items-start justify-between px-8">
      <p className="text-xl font-semibold">Outcome Statistics</p>

      <div className="flex items-center gap-6 text-center">
        <img
          src="/assets/icons/statistics/shop.svg"
          alt="shop"
          className="rounded-lg p-4 bg-[#FFEADA]"
        />
        <img src="/assets/icons/statistics/shoppingpb.svg" alt="shop" />
        <p className="h-full font-semibold text-2xl align-middle">52%</p>
      </div>

      <div className="flex items-center gap-6 text-center">
        <img
          src="/assets/icons/statistics/vehicle.svg"
          alt="shop"
          className="rounded-lg p-4 bg-[#DDF9E4]"
        />
        <img src="/assets/icons/statistics/vehiclepb.svg" alt="shop" />
        <p className="h-full font-semibold text-2xl align-middle">21%</p>
      </div>

      <div className="flex items-center gap-6 text-center">
        <img
          src="/assets/icons/statistics/plane.svg"
          alt="shop"
          className="rounded-lg p-4 bg-[#E4F0FF]"
        />
        <img src="/assets/icons/statistics/planepb.svg" alt="shop" />
        <p className="h-full font-semibold text-2xl align-middle">74%</p>
      </div>
    </div>
  );
};

export default Statistics;
