const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-1.5 rounded-t-[18px] bg-[#10A5E7] py-4.5 text-lg font-bold text-white"
      >
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
        <span>افزودن تور</span>
      </button>
    </footer>
  );
};

export default Footer;
