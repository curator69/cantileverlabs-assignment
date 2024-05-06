const Sidebar = () => {
  return (
    <div className="p-4 py-8 px-8 flex flex-col">
      <img src="/assets/logo.svg" alt="logo" className="mb-20" />

      <ul className="">
        <li className="flex items-center justify-left gap-8 p-4 font-bold bg-[#F0F7FF] rounded-lg cursor-pointer">
          <img
            src="/assets/icons/sidebar/overview.svg"
            alt="overview"
            className="w-[30px] h-[30px]"
          />
          <p className="text-[#197BBD]">Overview</p>
        </li>
        {images.map((image, index) => (
          <li
            className="flex items-center justify-left gap-8 p-4 font-bold text-[#C7C7C7] cursor-pointer"
            key={index}
          >
            <img
              src={`/assets/icons/sidebar/${image}.svg`}
              alt={image}
              className="w-[30px] h-[30px]"
            />
            <p>{image}</p>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center gap-2 mt-auto">
        <img src="/assets/icons/sidebar/cloud.svg" alt="cloud" />
        <p className="text-center">Give your money awesome space in cloud</p>
        <button className="p-4 rounded-xl bg-[#FFC145] font-bold">
          Upgrade to premium
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

const images = ["transactions", "cards", "invoices", "goals", "settings"];
