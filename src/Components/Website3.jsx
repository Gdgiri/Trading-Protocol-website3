import React, { useState, useEffect } from "react";
import axios from "axios";

const Website3 = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "https://trading-protocol-website3-backend.onrender.com/api/get-transactions"
        );
        setTransactions(response.data.transactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6">
          Website 3: Display Transactions
        </h2>
        <ul className="space-y-3">
          {transactions.map((tx, index) => (
            <li
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
            >
              {tx.name} - ₹{tx.price} -{" "}
              <span
                className={
                  tx.status === "buy" ? "text-green-400" : "text-red-400"
                }
              >
                {tx.status.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Website3;
