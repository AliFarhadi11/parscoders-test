import NotifToggler from "./notifications/NotifToggler";
import WalletToggler from "./wallet/WalletToggler";

const Header = () => {
  return (
    <header className="bg-white px-5 py-5.5 shadow-[0px_6px_18px_0px_#69798006,0px_2px_6px_0px_#6979800A]">
      <div className="flex items-center justify-between">
        {/* mobile menu toggler */}
        <button
          type="button"
          className="flex size-14 items-center justify-center rounded-[18px] border border-[#EEEEF0] bg-[#F4F7F9]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="#93A8C0"
              d="M3.65 12.818c-.694-.29-.712-1.306-.03-1.622.154-.072.464-.074 8.38-.074s8.226.002 8.38.074a.854.854 0 0 1 .5.804.855.855 0 0 1-.5.804c-.154.072-.464.074-8.372.076-7.334 0-8.227-.006-8.359-.062ZM11.648 19.818c-.692-.29-.71-1.307-.029-1.623.153-.07.358-.074 4.38-.074 4.024 0 4.228.004 4.38.075.316.146.5.444.5.803a.855.855 0 0 1-.5.805c-.152.07-.357.074-4.37.075-3.719.001-4.229-.006-4.36-.061Z"
            />
            <path
              fill="#93A8C0"
              fillRule="evenodd"
              d="M7.62 4.196c-.682.316-.664 1.332.029 1.622.132.055.834.062 6.351.062 6.798 0 6.35.016 6.615-.232.351-.33.351-.967 0-1.296-.264-.248.184-.232-6.624-.231-5.96 0-6.217.003-6.371.075Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* wallet & notifications */}
        <div className="flex items-center gap-4">
          <WalletToggler />
          <NotifToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
