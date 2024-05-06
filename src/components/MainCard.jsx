const MainCard = () => {
  return (
    <div className="flex gap-8 w-full shadow-xl p-8 rounded-xl">
      <div className="flex flex-col gap-4">
        <p className="text-xl font-semibold">Cards</p>
        <div className="flex items-center">
          <img src="/assets/images/maincard/leftarrow.svg" alt="card" />
          <img src="/assets/images/maincard/card.svg" alt="card" />
          <img src="/assets/images/maincard/rightarrow.svg" alt="card" />
        </div>
        <div className="relative">
          <img
            src="/assets/images/maincard/progresbar.svg"
            alt="card"
            className="absolute"
          />
          <img
            src="/assets/images/maincard/progresbarmain.svg"
            alt="card"
            className="absolute z-10"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#AEAEAE]">Weekly payment limit</p>
          <p className="font-semibold">$350.60 / $4000</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-between text-right border-l border-solid border-[#E8E8E8] pl-12">
        <div>
          <p className="text-[#197BBD] text-3xl font-bold">$ 2850.75</p>
          <p className="text-[#AEAEAE]">Current balance</p>
        </div>
        <div>
          <p className="text-[#439A86] text-3xl font-semibold">$ 1500.50</p>
          <p className="text-[#AEAEAE]">Income</p>
        </div>
        <div>
          <p className="text-[#BB4430] text-3xl">$ 350.60</p>
          <p className="text-[#AEAEAE]">Outcome</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <img src="/assets/images/maincard/toggle.svg" alt="toggle" />
          <p className="text-[#AEAEAE] text-sm font-normal">Deacivate card</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
