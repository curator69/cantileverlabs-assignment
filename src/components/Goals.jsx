const Goals = () => {
  return (
    <div className="flex flex-col gap-2 w-full px-8 rounded-xl">
      <div className="flex items-center gap-2">
        <p className="text-xl font-semibold">Goals</p>
        <span className="bg-[#FFC145] p-1 rounded-full w-5 h-5 flex items-center">
          +
        </span>
      </div>

      <div className="flex justify-between gap-8">
        <div className="shadow-xl p-4 rounded-xl flex flex-col gap-8 w-[150px]">
          <div>
            <p className="text-2xl font-semibold">$550</p>
            <p className="text-[#AEAEAE] text-sm font-normal">12/20/20</p>
          </div>

          <div className="flex flex-col gap-2">
            <img
              src="/assets/images/goals/mountain.svg"
              alt="mountain"
              className="w-9 h-9"
            />
            <p className="text-2xl">Holidays</p>
          </div>
        </div>

        <div className="shadow-xl p-4 rounded-xl flex flex-col gap-8 w-[150px]">
          <div>
            <p className="text-2xl font-semibold">$550</p>
            <p className="text-[#AEAEAE] text-sm font-normal">12/20/20</p>
          </div>

          <div className="flex flex-col gap-2">
            <img
              src="/assets/images/goals/renovation.svg"
              alt="mountain"
              className="w-9 h-9"
            />
            <p className="text-2xl">Renovation</p>
          </div>
        </div>

        <div className="shadow-xl p-4 rounded-xl flex flex-col gap-8 w-[150px]">
          <div>
            <p className="text-2xl font-semibold">$550</p>
            <p className="text-[#AEAEAE] text-sm font-normal">12/20/20</p>
          </div>

          <div className="flex flex-col gap-2">
            <img
              src="/assets/images/goals/xbox.svg"
              alt="mountain"
              className="w-9 h-9"
            />
            <p className="text-2xl">Xbox</p>
          </div>
        </div>

        <img src="/assets/images/maincard/rightarrow.svg" alt="card" />
      </div>
    </div>
  );
};

export default Goals;
