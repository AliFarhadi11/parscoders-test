import { useState } from "react";

const TransactionsSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isSearching = searchValue.length >= 1;

  return (
    <form
      className={`mt-3.5 flex w-full items-center gap-2 rounded-[18px] border ${isFocused || isSearching ? "border-[#10A5E7] bg-[#11A5E70D]" : "border-[rgb(238,238,240)] bg-white"} relative p-5 transition-all`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          stroke="#93949D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.806 17.296a7.49 7.49 0 1 0 0-14.98 7.49 7.49 0 0 0 0 14.98ZM15.015 15.404l2.937 2.93"
        />
      </svg>
      <input
        type="text"
        className="size-full border-none outline-none font-bold"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <button
        type="button"
        className={`${isSearching ? "block" : "hidden"} absolute left-5`}
        onClick={() => {
          setIsFocused(false);
          setSearchValue("");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="#3F3F44"
            fillRule="evenodd"
            d="M6.343 6.343c.39-.39 1.138-.277 1.669.254l9.39 9.391c.531.531.645 1.278.255 1.669-.39.39-1.138.276-1.669-.254l-9.39-9.391c-.532-.531-.645-1.278-.255-1.669Z"
            clipRule="evenodd"
          />
          <path
            fill="#3F3F44"
            fillRule="evenodd"
            d="M6.343 17.657c-.39-.39-.277-1.137.254-1.668l9.392-9.392c.53-.53 1.277-.644 1.668-.254.39.39.277 1.137-.254 1.668l-9.392 9.392c-.53.53-1.277.644-1.668.254Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default TransactionsSearch;
