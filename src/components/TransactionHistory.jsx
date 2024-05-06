const TransactionHistory = () => {
  return (
    <div className="w-full flex flex-col gap-8 shadow-xl p-8 rounded-xl">
      <p className="text-xl font-semibold">Transaction history</p>

      <div className="flex justify-between gap-8 items-start">
        <Reciever />
        <Type />
        <Date />
        <Amount />
      </div>
    </div>
  );
};

export default TransactionHistory;

const Reciever = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#AEAEAE]">Reciever</p>

      <div className="flex items-center gap-4">
        <img src="/assets/icons/transactionhistory/icon.svg" alt="icon" />
        <p className="text-sm font-normal text-[#404040]">Tesco Market</p>
      </div>
      <div className="flex items-center gap-4">
        <img src="/assets/icons/transactionhistory/icon.svg" alt="icon" />
        <p className="text-sm font-normal text-[#404040]">ElectroMen Market</p>
      </div>
      <div className="flex items-center gap-4">
        <img src="/assets/icons/transactionhistory/icon.svg" alt="icon" />
        <p className="text-sm font-normal text-[#404040]">Fiorgio Restaurant</p>
      </div>
      <div className="flex items-center gap-4">
        <img src="/assets/icons/transactionhistory/icon.svg" alt="icon" />
        <p className="text-sm font-normal text-[#404040]">John Mathew Kayne</p>
      </div>
      <div className="flex items-center gap-4">
        <img src="/assets/icons/transactionhistory/icon.svg" alt="icon" />
        <p className="text-sm font-normal text-[#404040]">Ann Marlin</p>
      </div>
    </div>
  );
};

const Type = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#AEAEAE]">Type</p>
      <p className="text-[#C7C7C7] text-sm font-normal">Shopping</p>
      <p className="text-[#C7C7C7] text-sm font-normal">Shopping</p>
      <p className="text-[#C7C7C7] text-sm font-normal">Food</p>
      <p className="text-[#C7C7C7] text-sm font-normal">Sport</p>
      <p className="text-[#C7C7C7] text-sm font-normal">Shopping</p>
    </div>
  );
};

const Date = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#AEAEAE]">Date</p>
      <p className="text-[#C7C7C7] text-sm font-normal">13 Dec 2020</p>
      <p className="text-[#C7C7C7] text-sm font-normal">13 Dec 2020</p>
      <p className="text-[#C7C7C7] text-sm font-normal">13 Dec 2020</p>
      <p className="text-[#C7C7C7] text-sm font-normal">13 Dec 2020</p>
      <p className="text-[#C7C7C7] text-sm font-normal">13 Dec 2020</p>
    </div>
  );
};

const Amount = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#AEAEAE]">Amount</p>
      <p className="text-sm font-bold">$75.67</p>
      <p className="text-sm font-bold">$75.67</p>
      <p className="text-sm font-bold">$75.67</p>
      <p className="text-sm font-bold">$75.67</p>
      <p className="text-sm font-bold">$75.67</p>
    </div>
  );
};

