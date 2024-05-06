const NewTransaction = () => {
  return (
    <div className="p-8 flex gap-4 shadow-xl h-fit w-full">
      <div className="flex flex-col gap-4 items-start h-fit">
        <p className="text-xl font-semibold">New transaction</p>

        <div className="flex items-start justify-between gap-4">
          <div className="text-center">
            <img src="/assets/images/transactions/ann.svg" alt="ann" />
            <p>Ann</p>
          </div>
          <div className="text-center">
            <img src="/assets/images/transactions/ann.svg" alt="ann" />
            <p>Ann</p>
          </div>
          <div className="text-center">
            <img src="/assets/images/transactions/ann.svg" alt="ann" />
            <p>Ann</p>
          </div>
          <div className="text-center">
            <img src="/assets/images/transactions/ann.svg" alt="ann" />
            <p>Ann</p>
          </div>
          <div className="text-center">
            <img src="/assets/images/transactions/ann.svg" alt="ann" />
            <p>Ann</p>
          </div>
          <div className="h-full flex flex-col items-center gap-4">
            <span className="bg-[#FFC145] p-1 rounded-full w-6 h-6 flex items-center">
              +
            </span>
            <p>Add New</p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-fit">
          <img
            src="/assets/images/transactions/input.svg"
            alt="input"
            className="h-[56px]"
          />
          <button className="p-4 rounded-xl bg-[#FFC145] font-bold">
            Send the transfer
          </button>
        </div>
      </div>

      <span className='w-[157px] h-[183px] bg-[#E05F47] rounded-xl'></span>
    </div>
  );
};

export default NewTransaction;
