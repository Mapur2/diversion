import axios from "axios";
import { useEffect, useState } from "react";

export const StatsSection = () => {
  const [revenue, setRevenue] = useState(undefined);
  const [expense, setExpense] = useState(undefined);
  useEffect(() => {
    const expensData = axios.get(
      "https://diversionbackend.onrender.com/api/sales/rev&exp"
    );
    console.log(expensData);
  }, []);
  return (
    <section className="flex mb-10 w-1/2  ">
      <div className=" flex-1 p-8 text-white bg-indigo-600 rounded-2xl border-black border-solid border-[5px] max-sm:p-4 w-1/2 max-sm:w-full">
        <div className="flex justify-between pb-5 mb-10 border-solid border-b-[5px] border-b-black">
          <div className="text-center">
            <h2 className="mb-5 text-5xl font-black max-sm:text-3xl">
              Total revenue
            </h2>
            <p className="text-4xl font-black max-sm:text-2xl text-green-400">
              {revenue}
            </p>
          </div>
          <div className="text-center">
            <h2 className="mb-5 text-5xl font-black max-sm:text-3xl">
              {expense}
            </h2>
            <p className="text-4xl font-black max-sm:text-2xl text-red-400">
              Rs 2,00,280
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-black max-sm:text-4xl">Total profit</h2>
          <p className="text-4xl text-lime-300 max-sm:text-2xl">Rs 2,00,000</p>
        </div>
      </div>
    </section>
  );
};
