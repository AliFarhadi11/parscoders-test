import { useState } from "react";
import TransactionsSearch from "./TransactionsSearch";
import TransactionItem from "./TransactionItem";

const TransactionsList = () => {
  const [currentTab, setCurrentTab] = useState("all");

  const tabs = [
    { label: "همه", tab: "all" },
    { label: "افزایش", tab: "increase" },
    { label: "کاهش", tab: "decrease" },
  ];

  // Dummy list
  const list = [
    {
      id: 0,
      title: "انتشار تور",
      amount: "-97000000",
      date: "03/05/22 - 15:20",
    },
    {
      id: 1,
      title: "تمید تور",
      amount: "-97000000",
      date: "03/05/22 - 15:20",
    },
    {
      id: 2,
      title: "آپلود تصویر",
      amount: "-97000000",
      date: "03/05/22 - 15:20",
    },
    {
      id: 3,
      title: "تکثیر تور",
      amount: "-97000000",
      date: "03/05/22 - 15:20",
    },
    {
      id: 4,
      title: "کارت بانکی",
      amount: "97000000",
      date: "03/05/22 - 15:20",
    },
  ];

  const filteredList =
    currentTab === "all"
      ? list
      : list.filter((item) =>
          currentTab === "increase"
            ? Number(item.amount) > 0
            : Number(item.amount) < 0
        );

  return (
    <div className="px-5 pt-8">
      {/* tabs */}
      <div className="flex items-center gap-1">
        {tabs.map((item) => (
          <button
            key={item.tab}
            type="button"
            onClick={() => setCurrentTab(item.tab)}
            className={`flex cursor-pointer items-center justify-center rounded-xl px-5 py-2 font-bold ${currentTab === item.tab ? "bg-[#10A5E7] text-white" : "text-[#93949D]"} `}
          >
            {item.label}
          </button>
        ))}
      </div>
      {/* search box */}
      <TransactionsSearch />
      {/* list */}
      <div className="hide-scrollbar mt-3 max-h-120 space-y-3 overflow-y-auto">
        {filteredList.map((item) => (
          <TransactionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;
