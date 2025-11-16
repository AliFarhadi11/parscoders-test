interface ITransactionItem {
  title: string;
  amount: string;
  date: string;
}

const TransactionItem = ({ title, amount, date }: ITransactionItem) => {
  const isDecrease = Number(amount) < 0;
  const decreaseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill="#F25267"
        fillRule="evenodd"
        d="m11.993 10.835-.354.001c-1.404.013-2.657.097-3.451.243-.015 0-.802.16-1.064.261-.38.16-.701.447-.905.808a2 2 0 0 0-.219.91c.012.25.137.661.242.955l.094.244c.642 1.617 2.74 4.707 4.024 5.89l.09.088.42.39c.322.245.715.375 1.138.375.379 0 .758-.116 1.064-.347.099-.07.226-.18.334-.28l.397-.38c1.321-1.304 3.175-4.128 3.79-5.592.013 0 .393-.91.407-1.343V13c0-.664-.379-1.285-.991-1.602-.168-.087-.496-.17-.784-.233l-.544-.114c-.874-.13-2.216-.216-3.688-.216Zm1.525-6.332C13.518 3.673 12.838 3 12 3a1.51 1.51 0 0 0-1.518 1.503l.328 3.7c0 .65.532 1.179 1.19 1.179.658 0 1.191-.528 1.191-1.18l.327-3.699Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const increaseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill="#2ED573"
        fillRule="evenodd"
        d="m13.518 19.497-.328-3.7c0-.65-.532-1.179-1.19-1.179-.658 0-1.191.528-1.191 1.18l-.327 3.699c0 .83.68 1.503 1.518 1.503a1.51 1.51 0 0 0 1.518-1.503ZM13.25 3.486c-.056-.051-.1-.09-.12-.11A1.857 1.857 0 0 0 11.992 3c-.379 0-.758.115-1.064.347-.212.148-.554.49-.554.49C9.047 5.052 7.05 8.069 6.408 9.6c-.014 0-.394.91-.408 1.343v.057c0 .665.379 1.285.991 1.603.254.131.874.254 1.168.313.095.018.156.03.16.034.874.13 2.216.216 3.688.216 1.546 0 2.945-.086 3.805-.244.015 0 .802-.16 1.065-.261.378-.16.7-.447.904-.809a2 2 0 0 0 .219-.91c-.015-.332-.233-.953-.336-1.198-.642-1.617-2.74-4.708-4.024-5.891-.133-.132-.285-.27-.39-.366Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const icon = isDecrease ? decreaseIcon : increaseIcon;

  return (
    <div className="flex items-center justify-between rounded-[18px] border border-[#EEEEF0] bg-white p-5 pt-6">
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-lg font-bold text-[#434349]">{title}</span>
      </div>
      <div className="flex flex-col items-start">
        <div className="font-yekan-bakhFaNum flex items-center gap-1 text-lg font-bold text-[#434349]">
          <span dir="ltr">{Number(amount).toLocaleString()}</span>
          <span>تومان</span>
        </div>
        <span
          className="font-yekan-bakhFaNum text-sm font-bold text-[#B9BAC0]"
          dir="ltr"
        >
          {date}
        </span>
      </div>
    </div>
  );
};

export default TransactionItem;
