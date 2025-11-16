import TransactionsList from "./TransactionsList";

interface IWallet {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wallet = ({ isOpen, setIsOpen }: IWallet) => {
  return (
    <div
      className={`bg-body fixed top-0 z-50 h-dvh w-full transition-all duration-300 ${isOpen ? "right-0" : "-right-full"}`}
    >
      <div className="bg-white px-5 pt-9 pb-7">
        {/* close menu button | back */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
            >
              <path
                fill="#93949D"
                fillRule="evenodd"
                d="M9.298 5.215a.875.875 0 0 1 1.237 0l8.167 8.166a.875.875 0 0 1 0 1.238l-8.167 8.166a.875.875 0 1 1-1.237-1.237L16.846 14 9.298 6.452a.875.875 0 0 1 0-1.237Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className="text-lg font-bold text-[#434349]">کیف پول</span>
        </div>
        {/* stock */}
        <div className="mt-10 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <span className="font-yekan-bakhFaNum text-[26px] font-bold text-[#434349]">
              {Number(15000000).toLocaleString()}
            </span>
            <p className="text-sm font-bold text-[#93949D]">موجودی (تومان)</p>
          </div>
        </div>
        {/* increase */}
        <button className="mx-auto mt-4.5 flex items-center gap-3 rounded-[18px] bg-[#10A5E7] px-12 py-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M12 4c.552 0 1 .609 1 1.36v13.28c0 .751-.448 1.36-1 1.36s-1-.609-1-1.36V5.36c0-.751.448-1.36 1-1.36Z"
              clipRule="evenodd"
            />
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M4 12c0-.552.608-1 1.358-1h13.284c.75 0 1.358.448 1.358 1s-.608 1-1.358 1H5.357C4.608 13 4 12.552 4 12Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-lg font-bold text-white">افزایش موجودی</span>
        </button>
      </div>

      {/* transactions list */}
      <TransactionsList />
    </div>
  );
};

export default Wallet;
