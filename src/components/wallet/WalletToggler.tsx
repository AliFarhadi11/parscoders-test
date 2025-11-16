import { useState } from "react";
import Wallet from "./Wallet";

const WalletToggler = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {/* ping */}
        <div className="absolute top-2 right-2 size-2 rounded-full bg-[#F25267]">
          <div className="absolute size-2 animate-ping rounded-full bg-[#F25267]"></div>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
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
              fillRule="evenodd"
              d="M17.769 8.382H22C22 4.985 19.964 3 16.516 3H7.484C4.036 3 2 4.985 2 8.338v7.324C2 19.015 4.036 21 7.484 21h9.032C19.964 21 22 19.015 22 15.662v-.312h-4.231c-1.964 0-3.556-1.553-3.556-3.467 0-1.915 1.592-3.467 3.556-3.467v-.034Zm0 1.49h3.484c.413 0 .747.326.747.728v2.531a.746.746 0 0 1-.747.728H17.85c-.994.013-1.864-.65-2.089-1.595a1.982 1.982 0 0 1 .433-1.652 2.092 2.092 0 0 1 1.576-.74Zm.151 2.661h.329a.755.755 0 0 0 .764-.745.755.755 0 0 0-.764-.746h-.329a.766.766 0 0 0-.54.213.727.727 0 0 0-.224.524c0 .413.34.75.764.754ZM6.738 8.382h5.644a.755.755 0 0 0 .765-.745.755.755 0 0 0-.765-.746H6.738a.755.755 0 0 0-.765.737c0 .413.341.75.765.754Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <Wallet isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default WalletToggler;
